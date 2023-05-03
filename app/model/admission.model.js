var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    enq_id:{
        type:String,
                   
    },
    followup_id:{
        type:String, 
                  
    },
    reg_no:{
        type:String,  
        unique: true
     },
    fname:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    lname:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    dob:{
        type:String,
        default: ''
    },
    gender:{
        type:String,
        
        
    },
    qualification:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    course_opted:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    guardian:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    relationship:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    addLine1:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    addLine2:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    pincode:{
        type:Number,
        default: ''
    },
    district:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    state:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
   
    email:{
        type:String,
        default: '',
        unique: true
    },
    mobile:{
        type:Number,
        default: ''        
    },
    altphone:{
        type:Number,
        default: ''
    },
    picture:{
        type:String,
        default: ''
    },
	signature:{
        type:String,
        default: ''
    },
    recpNo:{
        type:String,
        default: '',
        
    },
	amount:{
        type:String,
        default: ''
    },
	org_id:{
        type:String,
        default: ''
    },
    createdAt: {
        type: String,
        default: d.toDateString()
    },
    createdBy:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    updatedAt: {
        type: String,
        default: d.toDateString()
    },
    updatedBy:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    remarks:{
        type:String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default: ''
    },
    status: {
        type: String,
        default: 'Active'
    }
}, { unique: false }); 

var std_profile = new mongoose.model('std_profile', schema);

module.exports = std_profile;