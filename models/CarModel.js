var mongoose = require('mongoose')

mongoose.Schema({
    KEY:{
        type:String,
        require:true
    },
    COLOR:{
        type:String,
        require:true
    },
    DOCTYPE:{
        type:String,
        require:true
    },
    MODEL:{
        type:String,
        require:true
    },
    OWNER:{
        type:String,
        require:true
    }
    
})
