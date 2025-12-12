const crypto = require("crypto");
const User = require("../module/userModule");
const axios = require("axios");

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "User not found" });

    // Generate a token
    const token = crypto.randomBytes(20).toString("hex");

 
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email via Brevo API
    const emailData = {
      sender: { name: "Unity Coding", email: "skiranaswamy@gmail.com" },
      to: [{ email }],
      subject: "Reset Password",
      htmlContent: `<p>Click <a href="http://localhost:3000/password/reset/${token}">here</a> to reset your password</p>`
    };

    await axios.post("https://api.brevo.com/v3/smtp/email", emailData, {
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      }
    });

    res.json({ message: "Reset email sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Find user by token and check expiry
    const user = await User.findOne({
      where: {
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() }
      }
    });

    if (!user) return res.status(400).json({ error: "Invalid or expired token" });

    // Update password
    user.password = password; // Hash it in real scenario
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
