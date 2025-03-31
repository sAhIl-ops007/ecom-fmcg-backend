const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    rolename:{
        type:String,
    },
   
},{
    timestamps: true
})

module.exports = mongoose.model("roles",roleSchema)