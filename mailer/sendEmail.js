const { sendEmail1 } = require("./mailer");

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const msg = `
        sent by ${name}, email: ${email}
        message: 
        ${message}
    `;
  try {
    await sendEmail1("victorkimaru8@gmail.com", "ReEase", msg);
    res.sendStatus(200);
  } catch (error) {
    console.error("Failed to send email:", error.message);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = sendEmail;
