const express = require('express');
const { getUsers } = require('./controller');
const sendEmail = require('../mailer/sendEmail');
const { sendEmail1 } = require('../mailer/mailer');
const Users = require('../waitlist/model')
const fs = require('fs');
const path = require('path');
const {ReactDOMServer} = require('react-dom/server');

// Load the email template
const emailTemplatePath = path.join(__dirname, './email.html');
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');



const app = express();

// Send email route
app.post('/send-email', sendEmail);

// Get users route
app.get('/users', getUsers);
app.post('/add', async (req, res) => {
    try {
        const  email  = req.body;
        const newUser = await Users.create({ ...email });
        // await newUser.create();
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error adding user:', err.message);
        res.status(500).json({ error: 'Failed to add user' });
    }
});

app.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    try {
  
      await sendEmail1(email, "ReEase Subscription", emailTemplate);
      res.sendStatus(200);
    } catch (error) {
      console.error("Failed to subscribe:", error.message);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  })

module.exports = app;
