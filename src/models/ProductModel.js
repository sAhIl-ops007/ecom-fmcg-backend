const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type:String,
        required:true,
    },
    // productURL:{
    //     type: String,
    //     required: true
    // },
    stockeepingunit:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        required:true,
    },
    mrp:{
        type:Number,
        required:true,
    },
    discountinpercentage:{
        type:Number,
        required:true,
    },
    weight:{
        type:String,
        required:true,
    },
    unitOfMeasurement:{
        type:String,
        required:true,
    },
    expirydate:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:true,
    },

},{
    timestamps:true,
})

module.exports = mongoose.model('product',productSchema)