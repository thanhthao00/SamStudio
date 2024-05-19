import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/HomePage'
import Concept from './pages/Concept/Concept'
import Service from './pages/Service/Service'
import Wedding from './pages/Wedding/Wedding'
import Aodai from './pages/Aodai/Aodai'
import Aboutus from './pages/Aboutus/Aboutus'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "concept",
    element: <Concept />,
  },
  {
    path: "service",
    element: <Service />,
  },
  {
    path: "wedding",
    element: <Wedding />,
  },
  {
    path: "aodai",
    element: <Aodai />,
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
