import ReactDOM from 'react-dom/client';
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import App from './App.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Prescriptions from "./pages/Prescriptions";
import Contact from './pages/Contact';
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/prescriptions",
        element: <Prescriptions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);