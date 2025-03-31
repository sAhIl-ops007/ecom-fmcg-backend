const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryname:{
        type:String,
    },
},{
    timestamps:true,
})

module.exports = mongoose.model("category",categorySchema)