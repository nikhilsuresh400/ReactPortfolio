
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Project1 from './components/Project1/Project1'
import Project2 from './components/Project2/Project2'
import Project3 from './components/Project3/Project3'
import Project4 from './components/Project4/Project4'
import ContactmeModal from './components/Navbar/ContactmeModal'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/project1",
    element: <Project1 />
  },

  {
    path: "/project2",
    element: <Project2 />
  },

  {
    path: "/project3",
    element: <Project3 />
  },
  
  {
    path: "/project4",
    element: <Project4 />
  },
  {
    path: "/contactmodal",
    element: <ContactmeModal />
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
