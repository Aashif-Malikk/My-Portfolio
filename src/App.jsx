import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import Skill from './components/mySkills/Skill'
import Project from './components/myProjects/project'


let router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Nav />
      <Outlet />
    </>,
    children: [
      {
        index: true,
        element: <>
          <Hero />
        </>
      },
      {
        path: "/skills",
        element: <>
          <Skill />
        </>
      },
      {
        path: "/projects",
        element: <>
          <Project/>
        </>
      },
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
