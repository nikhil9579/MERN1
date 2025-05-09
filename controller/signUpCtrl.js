const signUp = require('../model/signUpModel');
const { generateToken } = require("../middleware/jwtauth");

exports.signUpUser = async (req, res) => {
    try {
        const user = new signUp(req.body);
        await user.save();

        console.log(user);

        const token = generateToken(user);
        console.log(token);

        res.status(200).json({ success: true, data: user, token: token });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: error.message });
    }
};
