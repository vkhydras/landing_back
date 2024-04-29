const { sendEmail1 } = require("./mailer");


sendSubcribe = async (req, res) => {
    const { email } = req.body;

    const msg = `Thank you for subscribing to RentEase! We'll keep you updated.`;

    try {
  
      await sendEmail1(email, "ReEase Subscription", msg);
      res.sendStatus(200);
    } catch (error) {
      console.error("Failed to subscribe:", error.message);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  }