const nodemailer = require("nodemailer");

const sendEmail = (x) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "ditokapanadze0@gmail.com",
      pass: "mevarditokapanadze",
    },
  });

  const options = {
    from: "ditokapanadze0@gmail.com",
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
