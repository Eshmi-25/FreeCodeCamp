const mongoose = require('mongoose')

const logindataSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const logindataModel = mongoose.model("logindata",logindataSchema)
module.exports = logindataModel