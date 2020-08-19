const nodemailer = require('nodemailer');



// Reuseable transporter object using SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mamadoufitnesswebsite@gmail.com',
        pass: 'dxhbk3dxr'

    },
});

// Mail parameters 
let mailInfo = {
    from: 'mamadoufitnesswebsite@gmail.com',
    to: "mamadoufitness@yahoo.com",
    subject: 'Hello',
    text: 'This is an email!'
}

// Send email
let info = transporter.sendMail(mailInfo, function(err, data) {
    if (err) {
        console.log('Error occurs', err);
    } else {
        console.log('Email has been sent');
    }
})