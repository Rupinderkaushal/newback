const { loginService, signUpService, expenseService, listExpenseService, deleteExpensesService, editExpensesService, fetchExpenseById, fetchVideosService } = require("../service/loginService");

const login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        const {response,statusCode,error,accessToken} = await loginService(email,password);
        if(error) return res.status(statusCode).send(response);
        return res.status(statusCode).json({message:response,accessToken});
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
const addExpense =async(req,res)=>{
    try {
        const {response,statusCode,error} = await expenseService(req.body);
        if(error) return res.status(statusCode).send(response);
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log("error",error)
        return res.status(400).send(error)
    }
};
const listExpense=async(req,res)=>{
    try {
        const {id} = req.params;
        const{response,statusCode,error} = await listExpenseService(id);
        if(error) return res.status(statusCode).send(response)
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log("error",error)
        return res.status(400).send(error) 
    }
};
const delelteExpenses=async(req,res)=>{
    try {
        const {id} = req.params;
        const {response,statusCode,error} = await deleteExpensesService(id);
        if(error) return res.status(statusCode).send(response);
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log("error",error)
        return res.status(400).send(error)
    }
};
const editExpenses=async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,amount} = req.body;
        console.log("abcccccc",id,title,amount)
        const {response,statusCode,error} = await editExpensesService(id,title,amount);
        if(error) return res.status(statusCode).send(response);
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log("error",error)
        return res.status(400).send(error)
    }
};
const fetchById =async(req,res)=>{
    try {
        const {id} = req.params;
        console.log("heelo")
        const {response,statusCode,error} = await fetchExpenseById(id);
        if(error) return res.status(statusCode).send(response)
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log("fetchById error",error)
        return res.status(400).send(error)
    }
};
const fetchVideos=async(req,res)=>{
    try {
        const {data,statusCode,error} = await fetchVideosService();
        if(error) return res.status(statusCode).json(data);
        return res.status(statusCode).json(data)
    } catch (error) {
        console.log("error-controller",error);
        return res.status(400).json(error)
    }
};

module.exports={
    login,
    signUp,
    addExpense,
    listExpense,
    delelteExpenses,
    editExpenses,
    fetchById,
    fetchVideos
}