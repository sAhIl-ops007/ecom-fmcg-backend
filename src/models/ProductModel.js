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
    price:{
        type:Number,
        required:true,
    },
    discountinpercentage:{
        type:Number,
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