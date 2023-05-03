var mongoose = require('mongoose');
var d = new Date();

var schema = new mongoose.Schema({
    name:{
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

});

var supportEnq = new mongoose.model('supportType', schema);

module.exports = supportEnq;
