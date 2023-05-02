var mongoose = require('mongoose');
var d = new Date();

var schema = new mongoose.Schema({
    support_type:{
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: "",
       
    },
    ticket_no:{
        type: String,
        unique:true,
           
    },
    enq_from:{
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: "",

    },
    enq_to:{
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: "",
  
    },
    descp:{
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: "",

    },
    email:{
        type: String,
        unique:true,
    },
    mobile:{
        type:String,  
        unique:true,
    }
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
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: "",

    },
    updatedAt:{
        type:String,
        default: d.toDateString() 
        
    },
    updatedBy:{
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }, 
        default: "",

    },
    status:{
        type:String,
        default:'Active'
    },
    remarks:{
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: "",
    }
})

var supportEnq = new mongoose.model('supportEnq', schema);

module.exports = supportEnq;
