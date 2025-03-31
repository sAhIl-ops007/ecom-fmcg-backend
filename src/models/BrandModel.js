const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    brandName:{
        type:String,
        required:true
    },
    subCategoryId:{
        type:Schema.Types.ObjectId,
        ref:'subcategory'

    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'category',
    }



},{
    timestamps: true
})
module.exports = mongoose.model('brand', brandSchema);