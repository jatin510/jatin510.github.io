import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export default async function (req, res) {
  try {
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
      form: req.body.email,
      to: EMAIL_USERNAME,
      subject: `Message from ${req.body.name}`,
      text: req.body.message,
      html: <div>{req.body.message}</div>,
    };

    const info = await transporter.sendMail(mailData);

    console.log(info);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("error in email", error);
    res.status(500).json({ success: false });
  }
}
