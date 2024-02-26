const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    username:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    gender:{
        type: String
    }
});

const expenseSchema = new mongoose.Schema({
    title:{
        type:String
    },
    amount:{
        type:Number
    },
    date:{
        type:String
    }
});

const SignUpModel = mongoose.model('User',signUpSchema);
const ExpenseModel = mongoose.model('Expense',expenseSchema)

module.exports={
    SignUpModel,
    ExpenseModel
};