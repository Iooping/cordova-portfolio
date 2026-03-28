const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// 1. Middleware (Secured for Production)
app.use(cors({
  // Replace the second link with your live Vercel frontend URL later
  origin: ['http://localhost:5173', 'https://your-portfolio-url.vercel.app'], 
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

// 2. The Specific Route (Contact Form)
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
  res.send("Backend is Online and Ready.");
});

// 4. Start Server (Local) or Export (Vercel Serverless)
// Vercel automatically sets NODE_ENV to "production" when deployed.
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 System Online on port: ${PORT}`);
  });
}

// Export the Express API so Vercel can run it as a serverless function
module.exports = app;