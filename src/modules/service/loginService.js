const { response } = require("express");
const { SignUpModel, ExpenseModel } = require("../../../models");
const jwt = require("jsonwebtoken");
const secretKey = "TEST_SECRET_KEY";


function generateToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: "30d" }); // Token expires in 1 hour
  }
const loginService =async(email,password)=>{
    try {
        const token = generateToken({
            email: email,
          });
        const dbResponse =await SignUpModel.findOne({email: email,password:password});
        if(dbResponse === null){
            return{response:"User not Found",statusCode:400,error:true}
        }
                return{response:{message:"user login Successfully",userName:dbResponse.username},accessToken:token,statusCode:200,error:false}
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
const deleteExpensesService=async(id)=>{
try {
    const dbResponse = await ExpenseModel.deleteOne({_id:id});
    console.log("dbResp",dbResponse);
    if(dbResponse.deletedCount > 0){
    return {response:"Entry Deleted Successfully",statusCode:200,error:false}}
    else {
        return {
            response: "No matching entry found for deletion",
            statusCode: 404, // Not Found
            error: true
        };
    }
} catch (error) {
    console.log("error",error)
    return {response:"Error during delete operation",statusCode:400,error:true}
}
}
const editExpensesService=async(id,title,amount)=>{
    try {
        const dbResponse = await ExpenseModel.updateOne({
            _id:id},{
                $set:{title:title,amount:amount}
        });
        console.log("dbResponse",dbResponse)
        return{response:'updated Successfully',statusCode:200,error:false}
    } catch (error) {
        return{response:'error',statusCode:400,error:true}
    }
};
const fetchExpenseById=async(id)=>{
    try {
        const resp = await ExpenseModel.findOne({_id:id});
        if(resp === null){
            return{ response:"error in try",statusCode:400,error:true}
        }
        return{ response:resp,statusCode:200,error:false}
    } catch (error) {
        console.log("error",error)
        return{ response:"error",statusCode:400,error:true}
    }
};


module.exports ={
    loginService,
    signUpService,
    expenseService,
    listExpenseService,
    deleteExpensesService,
    editExpensesService,
    fetchExpenseById,
}