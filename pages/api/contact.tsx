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
      password: EMAIL_PASSWORD,
    },
  });

  const mailData = {
    form: EMAIL_USERNAME,
    to: EMAIL_USERNAME,
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  };

  transporter.sendMail(mailData, (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false });
    } else {
      console.log(data);
      res.status(200).json({ success: true });
    }
  });
}
