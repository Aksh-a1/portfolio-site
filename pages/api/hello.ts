import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

interface Props {
  req: NextApiRequest
  res: NextApiResponse<Data>
}

export default function handler(props: Props) {
  const { res } = props
  res.status(200).json({ message: 'Hello World!' })
}
