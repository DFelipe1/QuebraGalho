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
import { NotFoundPage } from './Views/404';
import { LayoutHome } from './Views/home/layout';
import { Demands } from './Views/demands';
import { Services } from './Views/services';
import { Profile } from './Views/profile';
import { LayoutChat } from './Views/chats/layout';
import { Chat } from './Views/chats';
import { LayoutContract } from './Views/contract/layout';
import { FormContract } from './Views/contract/formContract';
import { Contract } from './Views/contract/contract';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <LayoutHome/>,
        children: [
          {
            path: "posts/",
            element: <Home />,
          },
          {
            path: "post/:postId",
            element: <Post />,
          },
        ],

      },
      {
        path: "chats/",
        element: <LayoutChat/>,
        children: [
          {
            path: ":idChat/",
            element: <Chat />,
          },
        ],

      },
      {
        path: "contract/",
        element: <LayoutContract />,
        children: [
          {
            path: "",
            element: <FormContract />,
          },
          {
            path: ":contractId",
            element: <Contract />,
          },
        ],
      },
      {
        path: "profile/:userName/",
        element: <Profile />,
      },
      {
        path: "notification/",
        element: <Notification />,
      },
      {
        path: "demands/",
        element: <Demands />,
      },
      {
        path: "services/",
        element: <Services />,
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
  {
    path: "/*",
    element: <NotFoundPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
