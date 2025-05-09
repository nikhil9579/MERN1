const mongoose = require('mongoose');
const signUpSchema = mongoose.Schema({

    name : String, 

    email :{
         type: String, 
         required: true,
         unique: true
        },

    password : String,

    role : String,

});

module.exports = mongoose.model("signUp", signUpSchema);