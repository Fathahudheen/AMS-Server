var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    f_name: {
        type: String,
        default:''
    },
    l_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default:'',
        unique: true,
    },
    password: {
        type: String,
        default:'',
    },
    mobile_no: {
        type: Number,
        default: ''
    },
    role_opt: {
        type: String,
        default: 'Licensee'
    },
    join_Date: {
        type: String,
        default: d.toDateString()
    },
    status: {
        type: String,
        default: 'Active'
    }
}, { unique: false });
var licensee = new mongoose.model('licensee', schema);
module.exports = licensee;
