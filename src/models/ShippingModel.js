const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const ShippingSchema = new Schema ({
    
    euserId:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:"eusers",
    },
    fullname:{
        type:String,
        requires:true,
    },
    address:{
        type:String,
        requires:true,
    },
    // cityId:{
    //     type:Schema.Types.ObjectId,
    //     requires:true,
    //     ref:"City",
    // },
    // stateId:{
    //     type:Schema.Types.ObjectId,
    //     requires:true,
    //     ref:"State",
    // },
    pincode:{
        type: Number,
        required: true,
    },
    phonenumber:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
})
module.exports = mongoose.model("shipping",ShippingSchema)