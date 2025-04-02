const EUserModel = require("../models/EUserModel");
const bcrypt = require("bcrypt");
const mailUtil = require("../utils/MailUtil")
const jwt = require("jsonwebtoken")
const secret = "secret"


const elogin = async (req,res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    const findEUserFromEmail = await EUserModel.findOne({ email: email }).populate("roleId")
    console.log("user",findEUserFromEmail);

    if (findEUserFromEmail != null) {
        
        const isMatch = bcrypt.compareSync(password, findEUserFromEmail.password)
     
        if (isMatch == true) {
          res.status(200).json({
            message: "login success",
            data: findEUserFromEmail,
          });
        } else {
          res.status(404).json({
            message: "invalid cred..",
          });
        }
      } else {
        res.status(500).json({
          message: "Email not found..",
        });
      }
};
const esignup = async (req,res) => {

    try{
        const salt = bcrypt.genSaltSync(10);
        const hasedPassword = bcrypt.hashSync(req.body.password,salt);
        req.body.password = hasedPassword;
        
        const createdEUser = await EUserModel.create(req.body)

        await mailUtil.sendingMail(createdEUser.email," E-Commerce-FMCG","This is from Ecom Website")

        res.status(200).json({
            message:"euser created",
            data:createdEUser,
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err,
        });
    }
};
const getAllEUser = async (req,res)=>{
    const euser = await EUserModel.find().populate("roleId")
    res.json({
        message:"euser fetched succesfully",
        data:euser
    });
};
const addEUser = async (req,res)=>{
    // const saveEUser = await EUserModel.create(req.body);
    // res.json({
    //     message:"EUser created succesfully",
    //     data:saveEUser
    // });
    try{
        const salt = bcrypt.genSaltSync(10);
        const hasedPassword = bcrypt.hashSync(req.body.password,salt);
        req.body.password = hasedPassword;
        
        const createdEUser = await EUserModel.create(req.body);
        res.status(201).json({
            message:"euser created",
            data:createdEUser,
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err,
        });
    }
};
const deleteEUser = async (req,res)=>{
    const delEUser = await EUserModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"EUser deleted succesfully",
        data:delEUser
    })
};
const findEUser = async (req,res)=>{
    const foundEUser = await EUserModel.findById(req.params.id)
    res.json({
        message:"EUser found succesfully",
        data:foundEUser
    })
}
const forgotpassword = async (req,res) => {
    const email = req.body.email;
    const founduser = await EUserModel.findOne({email:email});

    if(founduser){

        const token = jwt.sign(founduser.toObject(),secret);
        console.log(token);
        const url = `http://localhost:5173/resetpass/${token}`;
        const mailContent = `<html>
                                <a href ="${url}">reset password</a>
                            </html>`
        await mailUtil.sendingMail(founduser.email,"reset password",mailContent);
        res.json({
            message:"password reset link sent to your mail",
        });
    }else{
        res.json({
            message:"user not found register first please",
        })
    }

}
const resetPassword = async (req,res) => {
    const token = req.body.token
    const newPassword = req.body.password;

    const euserFromToken = jwt.verify(token,secret);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword,salt);

    const updatedEuser = await EUserModel.findByIdAndUpdate(euserFromToken._id,{password:hashedPassword,})

    res.json({
        message: "password update successfully"
    })

}


module.exports ={
    getAllEUser,addEUser,deleteEUser,findEUser,esignup,elogin,forgotpassword,resetPassword
    
}