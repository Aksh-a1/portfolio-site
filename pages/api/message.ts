import type { NextApiRequest, NextApiResponse } from 'next'
import maxApiLimitReach from '../../utils/maxApiLimitReach.middleware'

type Data = { msg: string }

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, message, id } = req.body
  maxApiLimitReach(id, res)
  try {
    console.log(`message: ${JSON.stringify({ name, email, message })}\n`)
    res.status(200).json({ msg: 'Email sent' })
  } catch (e) {
    res.status(500).json({ msg: `Server Error: ${e}` })
  }
}

export default handler
