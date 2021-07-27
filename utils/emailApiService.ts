import nodemailer, { SentMessageInfo } from 'nodemailer'
import { EmailBody } from '../types/EmailBody'

export const sendEmail: (props: EmailBody) => Promise<SentMessageInfo> =
  async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_HOST,
      auth: {
        user: 'process.env.MAIL_USER_NAME',
        pass: 'process.env.MAIL_PASSWORD'
      }
    })

    return transporter.sendMail({
      to: process.env.MAIL_TO,
      subject: `Message from ${name}`,
      text: `Sender's Email: ${email}
Message: ${message}`
    })
  }
