import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailData = {
    form: EMAIL_USERNAME,
    to: EMAIL_USERNAME,
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, (error, data) => {
    if (error) {
      console.log("error sending mail", error);
      res.status(500).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  });

  // send response mail

  const responseMessage = `
  Hi,
  <br/>  <br/>
  Thank's for contacting me. 
  <br/>  <br/>
  Regards,
  <br/>  
  Jagdish Parihar
  `;
  const responseMailData = {
    form: EMAIL_USERNAME,
    to: req.body.email,
    subject: `Thank You for contacting me!`,
    text: responseMessage,
    html: `<div>${responseMessage}</div>`,
  };
  transporter.sendMail(responseMailData, (err, data) => {});
}
