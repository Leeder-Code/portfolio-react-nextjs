import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const data = []
  res.status(200).json({ data })
}

export default handler
