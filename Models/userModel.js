const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    mobileNumber:{
        type:String,
        required:true,
        unique: true,
    },
    designation:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    addresss:{
        type:String,
    },
})

module.exports = mongoose.model("ClickUp",DataSchema);