const nodemailer = require("nodemailer");

const sendEmail = (x) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: "yahoo",
    secure: false,
    auth: {
      user: "ditokapanadze0@yahoo.com",
      pass: "hvpyppggzlwylnsw",
    },
  });

  const options = {
    from: "ditokapanadze0@yahoo.com",
    to: x.to,
    subject: "password reset request",
    html: x.text,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("sent:" + info.response);
  });
};
module.exports = sendEmail;
sdf;
