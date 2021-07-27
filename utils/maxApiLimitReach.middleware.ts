import type { NextApiResponse } from 'next'

interface Id {
  [x: string]: number
}

const reqCountForId: Id = {}

const maxApiLimitReach = (id: number, res: NextApiResponse) => {
  reqCountForId[id] =
    reqCountForId[id] !== undefined ? reqCountForId[id] + 1 : 0
  if (reqCountForId[id] > 5) {
    res.status(403).end('Maximum limit reached for requests')
  }
}

export default maxApiLimitReach
