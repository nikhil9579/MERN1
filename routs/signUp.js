const express = require('express');
const router = express.Router();

const {
    signUpUser
} = require("../controller/signUpCtrl");

router.post('/signup', signUpUser);

module.exports = router;