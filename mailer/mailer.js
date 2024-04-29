const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Function to send email
const sendEmail1 = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to,
            subject,
            text
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw error;
    }
};

module.exports = { sendEmail1 };
