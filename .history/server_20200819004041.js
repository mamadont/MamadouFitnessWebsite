const nodemailer = require('nodemailer');
var xoauth2 = require("xoauth2");



// Reuseable transporter object using SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'm.coulibaly@gmail.com',
        pass: ''

    },
});

// Mail parameters 
let mailInfo = {
    from: 'm.coulibaly23@gmail.com',
    to: "mamadoufitness@yahoo.com",
    subject: 'Hello',
    text: 'This is an email!'
}

// Send email
let info = await transporter.sendMail(mailInfo, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email has been sent');
    }
})

console.log("Message sent: %s", info.messageId);