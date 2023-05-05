var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    crs_id: {
        type: String,
        default:''
    },
    name: {
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default:'',
       
    },
    
    desc: {
        type: String,
        default: ''
    },
    // crs_track: {
    //     type: String,
    //     default: ''
    // },
    // crs_mode: {
    //     type: String,
    //     default: ''
    // },
    // ctd_by: {
    //     type: String,
    //     default: ''
    // },
  
    // updtd_by: {
    //     type: String,
    //     default: ''
    // },
    // updtd_date: {
    //     type: String,
    //     default: ''
    // },
    
    status: {
        type: String,
        default: 'Active'
    }
}, { unique: false });
var courses = new mongoose.model('course_subject', schema);
module.exports = courses;