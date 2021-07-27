import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '../../utils/emailApiService'

interface Id {
  [x: string]: number
}

const reqCountForId: Id = {}

type Data = { msg: string }

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, message, id } = req.body
  reqCountForId[id] =
    reqCountForId[id] !== undefined ? reqCountForId[id] + 1 : 0
  if (reqCountForId[id] > 5) {
    try {
      await sendEmail({ name, email, message })
      res.status(200).json({ msg: 'Email sent' })
    } catch (e) {
      res.status(500).end('Server Error')
    }
  } else {
    res.status(403).end('Maximum limit reached for requests')
  }
}

export default handler
