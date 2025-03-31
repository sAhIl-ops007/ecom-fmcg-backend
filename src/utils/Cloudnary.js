const cloundinary = require("cloudinary").v2;

const uploadFileToCloudinary = async (file) => {

    cloundinary.config ({
        cloud_name:"dcqlvctjy",
        api_key:"176251717164815",
        api_secret:"suYfKQYXYHqAvHajcOZEsE8MzYc"
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;

}
module.exports = {
    uploadFileToCloudinary
}