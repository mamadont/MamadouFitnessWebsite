const nodemailer = require('nodemailer');
var xoauth2 = require("xoauth2");



// Reuseable transporter object using SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
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

let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "m.coulibaly23@gmail.com", // list of receivers
    subject: "You received an email", // Subject line
    text: "Hello my name is Mamadou Coulibaly", // plain text body
});

console.log("Message sent: %s", info.messageId);