const { loginService, signUpService } = require("../service/loginService");

const login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        const {response,statusCode,error} = await loginService(email,password);
        if(error) return res.status(statusCode).send(response);
        return res.status(statusCode).send(response);
    } catch (error) {
        console.log("login-controller", error);
        return res.status(400).send(error)
    }
};
const signUp= async(req,res)=>{
    try {
        const {response,statusCode,error} = await signUpService(req.body);
        if(error) return res.status(statusCode).send(response);
        return res.status(statusCode).send(response);
    } catch (error) {
          console.log("error",error);
          return res.status(400).send(error)
    }
}

module.exports={
    login,
    signUp,
}