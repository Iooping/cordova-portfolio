const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// 1. Middleware (Must come before routes)
app.use(cors());
app.use(express.json());

// 2. The Specific Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("📥 Received Signal from:", name);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio: ${subject}`,
    text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent!");
    res.status(200).json({ status: "Success" });
  } catch (error) {
    console.error("❌ Mail Error:", error);
    res.status(500).json({ status: "Error", message: error.message });
  }
});

// 3. Fallback Route (To test if server is alive)
app.get('/', (req, res) => {
  res.send("Backend is Online and Listening.");
});

// 4. Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 System Online: http://localhost:${PORT}`);
});