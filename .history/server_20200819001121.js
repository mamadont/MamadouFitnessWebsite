const nodemailer = require('nodemailer');

// Reuseable transporter object
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
    },
});

let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "m.coulibaly23@gmail.com", // list of receivers
    subject: "You received an email", // Subject line
    text: "Hello my name is Mamadou Coulibaly", // plain text body
});

console.log("Message sent: %s", info.messageId);