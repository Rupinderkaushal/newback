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

const SignUpModel = mongoose.model('User',signUpSchema);

module.exports={
    SignUpModel
};