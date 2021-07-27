import nodemailer, { SentMessageInfo } from 'nodemailer'
import { EmailBody } from '../types/EmailBody'

export const sendEmail: (props: EmailBody) => Promise<SentMessageInfo> = async ({
  name,
  email,
  message
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER_NAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  return transporter.sendMail({
    from: email,
    to: process.env.MAIL_TO,
    subject: `Message from ${name}`,
    text: message
  })
}