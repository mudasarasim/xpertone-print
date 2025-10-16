const nodemailer = require('nodemailer');

// Configure transporter (example using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khubaibbintariq544@gmail.com', // Your email
    pass: 'cpen pold ifna svxf',   // App password or real password
  },
});

// Send email function
const sendEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: '"Printing Orders" <khubaibbintariq544@gmail.com>',
    to,
    subject,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (err) {
    console.error('Error sending email:', err);
  }
};

module.exports = sendEmail;
