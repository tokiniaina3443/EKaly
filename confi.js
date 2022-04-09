const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d0e77a998cc36d",
      pass: "26c7e92e80412b"
    }
  });

  module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    transport.sendMail({
        from: user,
        to: email,
        subject: "Please confirm your account",
        html: ` <h1>Email Confirmation</h1>
                <h2>Hello ${name}</h2>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href="${process.env.FRONT_BASE_URL}confirm/${confirmationCode}"> Click here</a>
            `
    }).catch(err => console.log(err));
};

module.exports.sendNewUserEmail = (username, email, password, confirmationCode) => {
    transport.sendMail({
        from: user,
        to: email,
        subject: "Welcome to ekaly",
        html: ` <h2>Hello ${username}</h2>
                <p>There are the informations to log into your account</p>
                <p>Username: ${username}</p>
                <p>Password: ${password}</p>
                <p>Please confirm your email by clicking on the following link</p>
                <a href="${process.env.FRONT_BASE_URL}confirm/${confirmationCode}"> Click here</a>
            `
    }).catch(err => console.log(err));
}