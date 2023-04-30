var mongoose = require('mongoose');
var d = new Date();

var schema = new mongoose.Schema({
    support_type:{
        type: String,
        default: "",
    },
    ticket_no:{
        type: String,
        default: "",
        unique:true,   
    },
    enq_from:{
        type: String,
        default: "",
    },
    enq_to:{
        type: String,
        default: "",  
    },
    descp:{
        type: String,
        default: "",
    },
    email:{
        type: String,
        unique:true
    },
    mobile:{
        type:String,  
        unique:true}
    ,
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
    remarks:{
        type: String,
        default: "",
    }
})

var supportEnq = new mongoose.model('supportEnq', schema);

module.exports = supportEnq;
