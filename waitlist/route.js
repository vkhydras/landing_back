const express = require('express');
const { getUsers } = require('./controller');
const sendEmail = require('../mailer/sendEmail');

const app = express();

// Send email route
app.post('/send-email', sendEmail);

// Get users route
app.get('/users', getUsers);

module.exports = app;
