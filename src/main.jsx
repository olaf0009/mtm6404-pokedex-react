import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Views
import Pokedex from './views/Pokedex'
import Pokemon from './views/Pokemon'
import Items from './views/Items'

const router = createBrowserRouter([
  {
      path:'/',
      element: <App />,
      children: [ 
        {
            path: '/',
            element: <Pokedex /> 
        },
        {
          path: '/pokemon/:name',
          element: <Pokemon /> 
      },
        {
          path: '/items',
          element: <Items /> 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
