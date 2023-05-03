var mongoose = require('mongoose');
var d = new Date();
var schema = new mongoose.Schema({
    name: {
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        default:''
        
    },
    description: {
        type: String,
        set: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
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
    createdBy: {
        type: String,
        default: ''
    },
    updatedBy: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default:'Active',
        
    }
    
  
}, { unique: false });
var enmode = new mongoose.model('enmode', schema);
module.exports = enmode;
