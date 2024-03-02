const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 4000;

<<<<<<< HEAD
const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: "abhiramchikatla03@gmail.com",
        pass: "yfva dwdd tkta xsbm",
    },
    secure: true,
});
=======
// const transporter = nodemailer.createTransport({
//     port: 465, // true for 465, false for other ports
//     host: "smtp.gmail.com",
//     auth: {
//         user: "xxxxxx",
//         pass: "xxxxxxx",
//     },
//     secure: true,
// });
>>>>>>> f30ba71bd626762c1e3d678e8c0ddd67b7c62cd5

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    // console.log(req.body);
    const {msg,name,email}=req.body;
    
    res.send("Hello World!");
    const mailData = {
        from: "abhiramchikatla03@gmail.com", // sender address
        to: "abhiramchikatla03@gmail.com", // list of receivers
        subject: `Msg from the portfolio  User: ${name}`,
        text: "",
        html: `<h3>${msg}</h3>`,
    };
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
