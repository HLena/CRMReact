import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import NewCustomer, {action as newCustomerAction } from './pages/NewCustomer';
import Index, { loader as loaderCustomer } from './pages/Index';
import Error  from './pages/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: loaderCustomer,
        errorElement: <Error/>
      },
      {
        path: '/customer/new',
        element: <NewCustomer/>,
        action: newCustomerAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
