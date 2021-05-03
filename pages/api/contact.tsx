import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export default function (req, res) {
  console.log(req.body);
  console.log("hello from api ");

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL_USERNAME,
      password: EMAIL_PASSWORD,
    },
  });

  const mailData = {
    form: req.body.email,
    to: EMAIL_USERNAME,
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  };

  console.log("mailData", mailData);

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
}
