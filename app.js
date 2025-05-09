const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

const connection = require("./db");

// !  router requires
const signUpRouter = require("./routs/signUp");
const userRouter = require("./routs/userdatarouter");

// ! api
app.use("/api/", userRouter);
app.use("/api/user", signUpRouter);

app.listen(3000,() =>{
    console.log("server starded listening on port " );
})
