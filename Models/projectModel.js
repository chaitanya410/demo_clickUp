const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        default: "is active"
    },  
})

module.exports = mongoose.model("Projects",projectSchema);