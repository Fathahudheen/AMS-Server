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
     },
    fname:{
        type:String,
        default: ''
    },
    lname:{
        type:String,
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
        default: ''
    },
    course_opted:{
        type:String,
        default: ''
    },
    guardian:{
        type:String,
        default: ''
    },
    relationship:{
        type:String,
        default: ''
    },
    addLine1:{
        type:String,
        default: ''
    },
    addLine2:{
        type:String,
        default: ''
    },
    pincode:{
        type:Number,
        default: ''
    },
    district:{
        type:String,
        default: ''
    },
    state:{
        type:String,
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
    altPhone:{
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
        default: ''
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
        default: ''
    },
    updatedAt: {
        type: String,
        default: d.toDateString()
    },
    updatedBy:{
        type:String,
        default: ''
    },
    remarks:{
        type:String,
        default: ''
    },
    status: {
        type: String,
        default: 'Active'
    }
}, { unique: false }); 

var std_profile = new mongoose.model('std_profile', schema);

module.exports = std_profile;