import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '../../utils/emailApiService'
import maxApiLimitReach from '../../utils/maxApiLimitReach.middleware'

type Data = { msg: string }

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, message, id } = req.body
  maxApiLimitReach(id, res)
  try {
    console.log(sendEmail({ name, email, message }))
    res.status(200).json({ msg: 'Email sent' })
  } catch (e) {
    res.status(500).json({ msg: `Server Error: ${e}` })
  }
}

export default handler
