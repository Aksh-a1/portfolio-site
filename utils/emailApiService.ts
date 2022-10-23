// import nodemailer, { SentMessageInfo } from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { EmailBody } from '../types/EmailBody'

export const sendEmail: (props: EmailBody) => EmailBody & { folders: string[] } = ({
  name,
  email,
  message
}) => {
  // const transporter = nodemailer.createTransport({
  //   service: process.env.MAIL_HOST,
  //   auth: {
  //     user: process.env.MAIL_USER_NAME,
  //     pass: process.env.MAIL_PASSWORD
  //   }
  // })
console.log({ name, email, message })
  let root = path.join(__dirname, '../');
let folders = fs.readdirSync(root);
console.log(folders)
return {
  name,
  email,
  message,
  folders
}
// folders.map(name => {
//     let fullname = path.join(root, name);
//     fs.stat(fullname,(err, state) => {
//         console.log(err, state)
//     });
// });

//   return transporter.sendMail({
//     to: process.env.MIL_TO,
//     subject: `Message from ${name}`,
//     text: `Sender's Email: ${email}
// Message: ${message}`
//   })
}
