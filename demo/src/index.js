import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./App.css";
import reportWebVitals from './reportWebVitals';
import {approuter} from "./App"
import {RouterProvider} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);

reportWebVitals();



