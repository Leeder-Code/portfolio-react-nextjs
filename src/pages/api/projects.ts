import { NextApiHandler } from 'next'

type Projects = {
  id: number
  imgSrc: string
  title: string
  about: string
  stack: string[]
  githubLink: string
  pageLink?: string
}[]

const handler: NextApiHandler = async (req, res) => {
  const data: Projects = [
    {
      id: 1,
      imgSrc: '/images/ToDoApp.png',
      title: 'Drag&Drop To Do App',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      stack: ['Next', 'React', 'React-Beautiful-DnD'],
      githubLink: 'https://github.com/Leeder-Code/Drag-Drop-ToDoApp',
      pageLink: 'https://to-do-app-leeder-code.vercel.app/',
    },
  ]
  res.status(200).json({ data })
}

export default handler
