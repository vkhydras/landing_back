const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'victorkimaru8@gmail.com',
        pass: 'hlff gmvg davq mlkk'
    },
});

async function sendEmail1 (to, subject, text) {
    try {
        await transporter.sendMail({
            from: 'victorkimaru8@gmail.com',
            to,
            subject,
            html:text
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw error;
    }
};

module.exports = { sendEmail1 };
