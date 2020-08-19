const nodemailer = require('nodemailer');
var xoauth2 = require("xoauth2");



// Reuseable transporter object using SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // Generate xoauth3 credentials to allows sending email through gmail
        xoauth2 = xoauth2.createXOAuth2Generator({
            user: "m.coulibaly23@gmail.com",
            clientId: "{Client ID}",
            clientSecret: "{Client Secret}",
            refreshToken: "{User Refresh Token}",
        })
    },
});

let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "m.coulibaly23@gmail.com", // list of receivers
    subject: "You received an email", // Subject line
    text: "Hello my name is Mamadou Coulibaly", // plain text body
});

console.log("Message sent: %s", info.messageId);