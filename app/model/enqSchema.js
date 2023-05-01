var mongoose = require("mongoose");
var d = new Date();
var schema = new mongoose.Schema({

  fname: {
    type: String,
    default: "",
  },
  lname: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
    enq_source: {
    type: String,
    default: "",
  },
  enq_mode: {
    type: String,
    default: "",
  },
  enq_for: {
    type: String,
  },
  loc: {
    type: String,
    default: "Kerala",
  },
  org_id: {
    type: String,
    default: "1",
  },
  createdAt: {
    type: String,
    default: d.toDateString(),
  },
  createdBy: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: String,
    default:  d.toDateString(),
  },
  updatedBy: {
    type: String,
    default: "",
  },
  remarks: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "New",
  },
});

var enquiry = new mongoose.model("enquiry", schema);

module.exports = enquiry;
