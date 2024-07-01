const mongoose = require('mongoose')

const ProjecASchema = new mongoose.Schema({
    fname: String,
    sname: String,
    email: String,
    phoneno: Number,
    password: Number,



})

const ProjectAModel = mongoose.model("customers", ProjecASchema)
module.exports = ProjectAModel