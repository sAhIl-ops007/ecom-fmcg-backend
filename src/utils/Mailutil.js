const mailer =require('nodemailer')

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:"bhaureact@gmail.com",
            pass:"lmwy sscb gkoz wvlr"
        }
    })

    const mailOptions = {
        from:'bhaureact@gmail.com',
        to:to,
        subject:subject,
        html:text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports = {
    sendingMail
}
