var mongoose = require('mongoose');
var d = new Date();

var schema = new mongoose.Schema({
    user_name:{
        type: String,
        default: "",
    },
       email:{
        type: String,
        default: "",
    },
    password:{
        type: String,
        default: "",
    },
    createdAt:{
      type:String,
      default: d.toDateString() 
    },
    
});

var login = new mongoose.model('user', schema);

module.exports = login;
