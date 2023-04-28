var mongoose = require("mongoose");
var d = new Date();
var schema = new mongoose.Schema(
  {
    f_name: {
      type: String,
      set: function(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      default: "",
    },
    l_name: {
      type: String,
      set: function(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      default: "",
    },
    email: {
      type: String,
      default: "",
      unique: true,
    },
    password: {
      type: String,
      default: "",
    },
    mobile_no: {
      type: Number,
      default: "",
    },
    picture: {
      type: String,
      default: "",
    },
    role_opt: {
      type: String,
      default: "Licensee",
    },
    createdAt: {
      type: String,
      default: d.toDateString(),
    },
    status: {
      type: String,
      default: "Active",
    },
    access_token: {
      type: String,
      default: "",
    },
    ftLogin: {
      type: Boolean,
      default: true,
    },
    crdtLmt: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    currencyCode: {
      type: String,
      default: "",
    },
    org_id: {
      type: String,
      default: "",
    },
    org_name: {
      type: String,
      default: "",
    },
    org_logo: {
      type: String,
      default: "",
    },
    updatedAt: {
      type: String,
      default: d.toDateString(),
    },
    createdBy: {
      type: String,
      default: "",
    },
    updatedBy: {
      type: String,
      default: "",
    },
    userType: {
      type: String,
      default: "",
    },
  },
  { unique: false }
);
var licensee = new mongoose.model("licensee", schema);
module.exports = licensee;
