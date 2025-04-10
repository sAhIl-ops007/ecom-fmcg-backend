const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const ShippingSchema = new Schema ({
    
    fullname:{
        type:String,
        requires:true,
    },
    address:{
        type:String,
        requires:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
})
module.exports = mongoose.model("shipping",ShippingSchema)