import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Error from '../src/pages/Error';
import Fiche from './pages/Fiche';
import About from './pages/About';
import Navbar from './components/Navbar';
import appts from './datas/logements.json'



//on définit root comme racine
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //si path != à l'un de ceux dans ce fichier alors => "/404"
    errorElement: 
    <>
    <Error />
    </>

  },
  {
    path: "/about",
    element: 
    <>
    <About />
    </>
  },
  {
    path: "/fiche/:id",
    element:
    <>
    <Fiche />
    </>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
