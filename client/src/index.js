import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouteProvider,
} from "react-router-dom";

const root = React.DOM.create.Root(document.getElementById('root'));
root.render(
  <App />
);