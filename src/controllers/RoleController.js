const RoleModels =require("../models/RoleModels")

const getAllRoles = async (req,res)=>{

    const roles = await RoleModels.find()
    res.json({
        
        message:"role fetched succesfully",
        data:roles
    });
};

const addRole = async (req,res)=>{
    const saveRole = await RoleModels.create(req.body)
    res.json({
        message:"role created succesfully",
        data:saveRole
    })
};
const deleteRole = async (req,res)=>{
    const deletedRole = await RoleModels.findByIdAndDelete(req.params.id)
    res.json({
        message:"role deleted succesfully",
        data:deletedRole
    })

};

const getFindById = async (req,res)=>{
    const findRole = await RoleModels.findById(req.params.id)
    res.json({
        message:"role fetched succesfully",
        data:findRole
    })
}
module.exports = {
    getAllRoles,addRole,deleteRole,getFindById
}