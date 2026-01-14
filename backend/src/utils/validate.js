const validator = require('validator')
const bcrypt = require('bcrypt')
const User = require("../models/models.js")

const isValidated = async(req)=>
{
    const {firstName,lastName,email,password} = req.body

    if(!firstName || !lastName)
    {
        throw new Error("Incomplete credentials")
    }
    else if(!validator.isEmail(email))
    {
        throw new Error("Invalid email id")
    }

    const hashedPassword =await bcrypt.hash(password,10)

    return hashedPassword

};

const checkCredentials = async(req)=>{
    const {email,password} = req.body
    if(!validator.isEmail(email))
    {
        throw new Error("Invalid Email")
    }
    const checkEmail = await User.findOne({email:email})
    if(!checkEmail)
    {
        throw new Error("Invalid Email")
    }
    const checkpassword = await bcrypt.compare(password,checkEmail.password)

    return checkpassword
}

module.exports={isValidated,checkCredentials}