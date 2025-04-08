const BrandModel = require("../models/BrandModel")

const addBrand = async(req,res) => {
    try{
        const savedBrand = await BrandModel.create(req.body)
        res.status(201).json({
            message:"Brand Added Succesfully",
            data:savedBrand
        })
    }catch (err) {
        res.status(500).json({message:err})
    }
};

const getBrand = async (req,res) => {
    try{
        const allBrand = await BrandModel.find().populate("subCategoryId").populate("categoryId")
                res.status(200).json({
                    message:"Brand Fetched succesfull",
                    data:allBrand
                })
    }catch (err) {
        res.status(500).json({message:err})
    }
}



module.exports = {
    addBrand,getBrand
};