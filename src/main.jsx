import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Route/Route'
import './index.css'


// const myCreateRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>this is home </div>
//   }, 
//   {
//     path: "/about",
//     element: <div>this is about</div>
//   },
//   {
//     path: "/products",
//     element: <div>this is products</div>
//   }
// ])

// const myCreateRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//     children: [
//       {
//         path: "/",
//         element: <div>this is profile</div>
//       },
//       {
//         path: "/about",
//         element: <div>This is about</div>
//       },
//       {
//         path: "/products",
//         element: <div>This is products</div>
//       }
//     ]
//   }
// ])

// const myCreateRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/about",
//         element: <About></About>
//       },
//       {
//         path: "/products",
//         element: <Products></Products>
//       }
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter}></RouterProvider>
  </React.StrictMode>,
)
