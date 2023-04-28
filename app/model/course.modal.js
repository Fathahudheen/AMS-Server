var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    crs_id: {
        type: String,
        default:''
    },
    crs_name: {
        type: String,
        default:'',
       
    },
    crs_ctgry: {
        type: String,
        default: ''
    },
  
    duration: {
        type: String,
        default:'',
    },
    crs_dscrp: {
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
    ctd_date: {
        type: String,
        default: d.toDateString()
    },
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
var courses = new mongoose.model('courses', schema);
module.exports = courses;
