import * as React from "react";
import { createRoot } from "react-dom"; 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './routes.jsx/Home'
import About from './routes.jsx/About'
import Doctors from "./routes.jsx/Doctors";
import Appointment from "./routes.jsx/Appointment";
import Prescriptions from "./routes.jsx/Prescriptions";
import Contact from './routes.jsx/Contact'
import Profile from "./routes.jsx/Profile";
import Login from "./routes.jsx/Login";
import Navbar from './components/Navbar';
import './index.css'
import './components/Navbar.css';

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
          {
            path: "/",
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);