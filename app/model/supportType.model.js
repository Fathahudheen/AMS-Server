var mongoose = require('mongoose');
var d = new Date();

var schema = new mongoose.Schema({
    name:{
        type: String,
        default: "",
    },
       descp:{
        type: String,
        default: "",
    },
    org_id:{
        type: String,
        default: "",
    },
    createdAt:{
      type:String,
      default: d.toDateString() 
    },
    createdBy:{
        type: String,
        default: "",
    },
    updatedAt:{
        type:String,
        default: d.toDateString() 
        
    },
    updatedBy:{
        type: String,
        default: "", 
    },
    status:{
        type:String,
        default:'Active'
    },

});

var supportEnq = new mongoose.model('supportType', schema);

module.exports = supportEnq;
