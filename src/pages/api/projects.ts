import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  res.status(200).json({ project: 'ok' })
}

export default handler
