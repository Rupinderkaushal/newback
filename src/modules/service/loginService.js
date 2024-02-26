const { SignUpModel, ExpenseModel } = require("../../../models");

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
const expenseService=async(expenseData)=>{
    try {
        const dbResponse = await ExpenseModel.create({
            title:expenseData.title,
            amount:expenseData.amount,
            date:expenseData.date
        });
        if(dbResponse === null){
            return{response:"expense didnt added",statusCode:400,error:true}
        }
        console.log("&&&&&&&&&&&&&&&&&",dbResponse)
        return{response:"Expense Added Successfully",statusCode:200,error:false}
    } catch (error) {
        return{response:"error during adding expense ",statusCode:400,error:true}
    }
};
const listExpenseService=async()=>{
    try {
       const resp = (await ExpenseModel.find());
        // Convert resp to JSON format and remove index keys
        const jsonResponse = resp.map(item => item.toJSON());
      console.log("97",jsonResponse)
        // Removing index keys
        const jsonResponseWithoutIndex = Object.values(jsonResponse);
        console.log("98",jsonResponseWithoutIndex)
       return{response:jsonResponseWithoutIndex,statusCode:200,error:false}
    } catch (error) {
        console.log("error",error)
       return{response:"error",statusCode:400,error:true}
    }
};

module.exports ={
    loginService,
    signUpService,
    expenseService,
    listExpenseService,
}