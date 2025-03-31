const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    subCategoryName:{
        type:String,
        required:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'category',
    }

},{
    timestamps: true
})
module.exports = mongoose.model('subcategory', subCategorySchema);