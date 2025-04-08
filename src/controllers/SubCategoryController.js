const SubCategoryModel = require("../models/SubCategoryModel")

const addSubCategory = async(req,res) => {
    try{
        const savedSubCategory = await SubCategoryModel.create(req.body);
        res.status(201).json({
            message:"SubCategory Added Succesfully",
            data:savedSubCategory
        })
    }catch(err){
        res.status(500).json({message:err})
    }
};

const getSubCategory = async(req,res) => {
    try{
        const allCategory = await SubCategoryModel.find().populate("categoryId");
        res.status(200).json({
            message:"All SubCategory Fetched Succesfully",
            data:allCategory
        })
    }catch(err){
        res.status(500).json({message:err})
    }
}

const getSubcategoryByCategoryId = async (req,res) => {
    try{
        const categories = await SubCategoryModel.find({ categoryId:req.params.categoryId })
        res.status(200).json({
            message:"sub-category found",
            data:categories
        })
    }catch(err){
        res.status(500).json({
        message:"sub-category not found",
    });
    }
}


module.exports = {
    addSubCategory,getSubCategory,getSubcategoryByCategoryId
}