const signUp = require('../model/signUpModel');
const { generateToken } = require("../middleware/jwtauth");

exports.loginUser = async (req, res) =>{
   try {
    const {email , password} = req.body;

     const user = await signUp.find({ email : email });

     if(!user || !(await user.comparePassword(password))){
        res.status(401).json({ message : "email or password incorrect"});
     }

     const token = generateToken(user);

     res.json(token);
     

   } catch (error) {
    res.status(500).json({ message: "error"});
   }
}