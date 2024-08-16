import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Home } from './Views/home';
import { Login } from './Views/login';
import { Register } from './Views/register';
import { Post } from './Views/post';
import { Layout } from './Views/layout';
import { Notification } from './Views/notification';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "posts/",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <Post />,
      },
      {
        path: "notification/",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/login",
    element: <div className='w-full max-w-[1216px] mx-auto'><Login/></div>,
  },
  {
    path: "/register",
    element: <div className='w-full max-w-[1216px] mx-auto'><Register/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
