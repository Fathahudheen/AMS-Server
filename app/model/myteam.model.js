var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    f_name: {
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default:''
    },
    l_name: {
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
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
        default: ''
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
var myteam = new mongoose.model('myteam', schema);
module.exports = myteam;
