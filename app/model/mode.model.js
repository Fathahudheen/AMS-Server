var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    name: {
        type: String,
        default:''
    },
    description: {
        type: String,
        default: ''
    },
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
        default:'Active',
        
    }
    
  
}, { unique: false });
var mode = new mongoose.model('mode', schema);
module.exports = mode;
