const mongoose = require ("mongoose")
const orderSchema = new Schema({
    orderID:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('order',orderSchema)
