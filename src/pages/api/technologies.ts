import { NextApiHandler } from 'next'
type Technologies = {
  id: number
  placeholder: string
}[]

const handler: NextApiHandler = async (req, res) => {
  const data: Technologies = [
    {
      id: 1,
      placeholder: 'placeholder',
    },
    {
      id: 2,
      placeholder: 'placeholder2',
    },
  ]
  res.status(200).json({ data })
}

export default handler
