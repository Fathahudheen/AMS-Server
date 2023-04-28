var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
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
    // role_opt: {
    //     type: String,
    //     default: 'Student'
    // },
    createdAt: {
        type: String,
        default: d.toDateString()
    },
    updatedAt: {
        type: String,
        default: d.toDateString()
    },
    status: {
        type: String,
        default: 'Active'
    }
}, { unique: false });
    // altphone:{
    //     type:String,
       
    //     unique: true
    // },
    // photo:{
    //     type:String,
    //     // required: true,
    // },
    // signature:{
    //     type:String,
    //     // required: true,
    // },
    // recpNo:{
    //     type:String,
    //     // required: true,
    //     // unique: true
    // },
    // amount:{
    //     type:Number,
        
    //  },
    // createdAt:{
    //     type:String,
    //     // required: true,
    // },
    // createdBy:{
    //     type:String,
    //     // required: true,
    // },
    // updatedAt:{
    //     type:String,
    //     // required: true,
    // },
    // updatedBy:{
    //     type:String,
    //     // required: true,
    // },
    // remarks:{
    //     type:String,
    //     // required: true,
    // },
    // status:{
    //     type:String,
    //     // required: true,
    // },
    
    

// });

var std_profile = new mongoose.model('std_profile', schema);

module.exports = std_profile;