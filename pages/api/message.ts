import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '../../utils/emailApiService'

type Data = { msg: string }

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, message } = req.body
  try {
    await sendEmail({ name, email, message })
    res.status(200).json({ msg: 'Email sent' })
  } catch (e) {
    res.status(500).end('Server Error')
  }
}

export default handler
