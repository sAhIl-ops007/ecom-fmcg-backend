const shippingModel = require("../models/ShippingModel")

const addShipping = async (req,res) => {
    try{
        const savedShipping = await shippingModel.create(req.body);
        res.status(201).json({
            message : "Shipping Added Successfully",
            data : savedShipping
        })
    
    }
    catch(err){
        res.status(500).json({message:err})
    }
};
   
module.exports = {
    addShipping
}