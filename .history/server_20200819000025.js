const express = require('express');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {

});

app.listen(PORT, () => {
    console.log('Serving on port, ', 8080);
});