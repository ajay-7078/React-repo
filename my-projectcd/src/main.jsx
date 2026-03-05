import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact Us/Contact.jsx'
import User from './components/User/user.jsx'
import Github from './components/Github/Github.jsx'
//import { githubLoader } from './components/Github/Github.jsx'
import Layout from './layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/user/:userid", element: <User /> },
      { path: "github", element: <Github />, 
        // loader: githubLoader
        // loader: () => {
        //   return fetch('https://api.github.com/users/ajay-7078')
        // }
      }
    ]
    }
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// )



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
