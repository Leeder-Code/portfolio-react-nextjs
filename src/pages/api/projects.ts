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
        'Ut molestie magna quis leo condimentum, ut ultrices tellus iaculis. Phasellus ut feugiat nunc. Sed posuere vehicula nibh a mollis. Sed ac lorem sit amet tellus vulputate gravida. Fusce tellus dolor, tincidunt aliquet pulvinar vitae, auctor sollicitudin odio.',
      stack: ['Next', 'React', 'React-DnD', 'Typescript'],
      githubLink: 'https://github.com/Leeder-Code/Drag-Drop-ToDoApp',
      pageLink: 'https://to-do-app-leeder-code.vercel.app/',
    },
    {
      id: 2,
      imgSrc: '/images/Workeo.png',
      title: 'Workeo APP',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, lectus non aliquet rhoncus, arcu ligula pulvinar magna, quis maximus ante enim et dui. Etiam urna ligula, commodo et luctus nec, commodo ut urna. ',
      stack: ['React', 'Mongoose', 'Express', 'Firebase', 'Chart.js'],
      githubLink: '',
      pageLink: 'https://app.workeo.dev/',
    },
    {
      id: 3,
      imgSrc: '/images/Subme.png',
      title: 'Subme APP',
      about:
        'Vivamus viverra ex id est congue malesuada. Nam facilisis consequat augue eu malesuada. Integer dignissim tincidunt dui vitae bibendum. Cras pellentesque mauris ut urna tristique accumsan. Praesent non massa eget dolor condimentum varius non et urna.',
      stack: ['Next', 'React', 'Typescript', 'Swr', 'web3'],
      githubLink: '',
      pageLink: 'https://subme-sale.vercel.app/',
    },
    {
      id: 4,
      imgSrc: '/images/TicTacToe.png',
      title: 'Online Tic-Tac-Toe Game',
      about:
        'Nam ornare quam ut urna vulputate aliquam. Mauris gravida lorem eu velit feugiat porttitor. Sed convallis, nisl non tincidunt feugiat, felis magna congue sem, non sodales sem lorem in sapien.',
      stack: ['React', 'Socket.io', 'JavaScript', 'SASS'],
      githubLink: 'https://github.com/Leeder-Code/online-tictactoe-game',
      pageLink: '',
    },
  ]
  res.status(200).json({ data })
}

export default handler
