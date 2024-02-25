const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 4000;

// const transporter = nodemailer.createTransport({
//     port: 465, // true for 465, false for other ports
//     host: "smtp.gmail.com",
//     auth: {
//         user: "xxxxxx",
//         pass: "xxxxxx",
//     },
//     secure: true,
// });

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World!");
    // const mailData = {
    //     from: "abhiramchikatla03@gmail.com", // sender address
    //     to: "abhiramchikatla03@gmail.com", // list of receivers
    //     subject: "Msg from the portfolio",
    //     text: "",
    //     html: `${req.body}`,
    // };
    // transporter.sendMail(mailData, function (err, info) {
    //     if(err)
    //       console.log(err)
    //     else
    //       console.log(info);
    //  });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
