const express = require('express');
const router = express.Router();

const {
    userData,
    getUser,
    updateUser,
    deleteUser
} = require("../controller/usreCtrl"); // Corrected import statement

router.post("/send", userData);
router.get("/getuUser", getUser);
router.patch("/:id/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);


module.exports = router;
