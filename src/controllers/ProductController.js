const productModel = require ("../models/ProductModel")
const multer = require ("multer");
// const path = require ("path");
const cloudinaryutil = require ("../utils/Cloudnary");
const ProductModel = require("../models/ProductModel");

//storage engine

const storage = multer.diskStorage({
    destination:"./upload",
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
})

//multer object

const upload = multer({
    storage:storage,
}).single("image");


const addProduct = async (req,res) => {
    try{
        const savedProduct = await productModel.create(req.body);
        res.status(201).json({
            message:"Product Added Succesfully",
            data:savedProduct,
        })
    }
    catch (err){
        res.status(500).json({message:err})
    }
};

const getAllProduct = async (req, res) => {

    try{
        
        const products = await productModel.find();
        res.status(200).json({
            message: "All product fetched successfully",
            data: products
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

const addProductWithFile = async(req,res) => {

    try{

        upload(req,res,async (err) =>  {
            if(err){
                console.log(err);
                res.status(500).json({
                    message: err.message,
                });
    
            }else{
                
                const cloundinaryResponse = await cloudinaryutil.uploadFileToCloudinary(req.file);
                console.log(cloundinaryResponse);
                console.log(req.body);

                req.body.productURL = cloundinaryResponse.secure_url;

                const savedProduct = await productModel.create(req.body);

                res.status(200).json({
                    message: "productimage saved successfully",
                    data: savedProduct,
                });

            }
        })

    }
    catch(err){

        req.json({
            message: err
        })

    }
}

const getProductByProductId = async(req,res) => {
    try{
        const findProductById = await ProductModel.findById(req.params.id)
        res.status(201).json({
            message:"Product found Successfully",
            data:findProductById
        })
    }catch(err){
        res.status(500).json({message:err})
    }
    

}


module.exports = {
    addProduct,getAllProduct,addProductWithFile,getProductByProductId
}
