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
    },
    addedBy:{
        type:String
    }
});

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    filename: String,
    fileSize: Number,
    uploader: String,
    // Add any other metadata fields you need
});

const SignUpModel = mongoose.model('User',signUpSchema);
const ExpenseModel = mongoose.model('Expense',expenseSchema);
const VideoModel = mongoose.model('Video', videoSchema);


module.exports={
    SignUpModel,
    ExpenseModel,
    VideoModel,
};