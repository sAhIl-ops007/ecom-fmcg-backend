const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    pname:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    pdiscount:{
        type:Number,
        require:true,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'category',
    },
    subCategoryId:{
        type:Schema.Types.ObjectId,
        ref:'subcategory'
    },
    status:{
        type:Boolean,
        default:true,
    },
    
},{timestamps:true})

module.exports = mongoose.model('addproduct',productsSchema)

// const mongoose = require ("mongoose")
// const Schema = mongoose.Schema;

// const productSchema = new Schema({
//     productName:{
//         type:String,
//         required:true,
//     },
//     // productURL:{
//     //     type: String,
//     //     required: true
//     // },
//     price:{
//         type:Number,
//         required:true,
//     },
//     discount:{
//         type:Number,
//         required:true,
//     },
//     categoryId:{
//         type:Schema.Types.ObjectId,
//         ref:'category',
//     },
//     subCategoryId:{
//         type:Schema.Types.ObjectId,
//         ref:'subcategory'
//     },
//     status:{
//         type:Boolean,
//         default:true,
//     },


// },{
//     timestamps:true,
// })

// module.exports = mongoose.model('product',productSchema)

