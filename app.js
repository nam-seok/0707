var express = require('express')
var app = express()
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
require('dotenv').config()

var MONG_URL = process.env.M_URL
mongoose.connect(MONG_URL,{ useNewUrlParser: true,useUnifiedTopology: true  })

var apiRouter  = require('./routes/Router')

app.set('views' , path.resolve(__dirname+'/views'))
app.set('view engine' , 'ejs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/public'));
app.use(cors());

app.use('/', apiRouter)

var port = process.env.PORT || 3000
app.listen(port , () => {
    console.log(`Server is Starting at http://localhost:${port}`)
})