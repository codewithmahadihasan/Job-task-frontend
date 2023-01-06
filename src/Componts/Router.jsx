import { createBrowserRouter } from 'react-router-dom'
import Main from '../Main'
import Alluser from './Alluser'
import Hero from './Hero'
import InputSection from './InputSection'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Hero></Hero>,
      },
      {
        path: '/input',
        element: <InputSection></InputSection>,
      },
      {
        path:'/allusers',
        element: <Alluser></Alluser>
      },
    ],
  },
])

export default router
