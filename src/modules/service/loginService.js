const { SignUpModel } = require("../../../models");

const loginService =async(email,password)=>{
    try {
        const dbResponse =await SignUpModel.findOne({email: email,password:password});
        if(dbResponse === null){
            return{response:"User not Found",statusCode:400,error:true}
        }
                return{response:"Login Successfull",statusCode:200,error:false}
    } catch (error) {
        console.log("login-error",error)
      return {response:"Login Failed",statusCode:400,error:true}  
    }
};
const signUpService=async(userData)=>{
    try {
        const isUserExisted = await SignUpModel.findOne({
            email:userData.email
        });
        if(isUserExisted){
            return{ response:"User already existed", statusCode:400, error:true}
        }
        const user = await SignUpModel.create({
            email:userData.email,
            password:userData.password,
            username: userData.username,
            gender: userData.gender,
            mobileNumber: userData.mobileNumber,

        });
        console.log("userData",user)
        return{response:"user created Successfully!",statusCode:200,error:false}
    } catch (error) {
        console.log("error",error)
        return {response: "user Creation Falied",statusCode:400,error:true}
    }
};

module.exports ={
    loginService,
    signUpService
}