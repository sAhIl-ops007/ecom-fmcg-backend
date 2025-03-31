const CategoryModel = require("../models/CategoryModel")

const addCategory = async(req,res) => {
    
    try{
        const savedCategory = await CategoryModel.create(req.body);
        res.status(201).json({
            message:"Category Added Succesfully",
            data:savedCategory,
        })
    }
    catch(err){
        res.status(500).json({message:err})
    }
};

const getCategory = async(req,res) => {
    try{
        const allCategory = await CategoryModel.find()
        res.status(200).json({
            message:"Category Fetched succesfull",
            data:allCategory
        })
    }catch (err){
        res.status(500).json({message:err})
    }
}


module.exports = {
    addCategory,getCategory
};