const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");

// process.env.NODE_ENV === "development"

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  const configs = await getConfigs();
  //!!! добавил проверку на получение без нее перестал работать
 if (configs){
console.log(configs)
  //authorization for sending email
  let transporter = nodemailer.createTransport({
    service:
      process.env.NODE_ENV === "production"
        ? configs.production.email.mailService
        : configs.development.email.mailService,
    auth: {
      user:
        process.env.NODE_ENV === "production"
          ? configs.production.email.mailUser
          : configs.development.email.mailUser,
      pass:
        process.env.NODE_ENV === "production"
          ? configs.production.email.mailPassword
          : configs.development.email.mailPassword
         
    },
    tls: {
      rejectUnauthorized: false
  }

  });

  const mailOptions = {
    from:
      process.env.NODE_ENV === "production"
        ? configs.production.email.mailUser
        : configs.development.email.mailUser,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };

  const result = await transporter.sendMail(mailOptions);
  console.log("TCL:mailSender.js  result", result)

  return result
 }

};
