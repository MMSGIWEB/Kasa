//importation de la bbliothèque React dans le code
import React from 'react';
// permet d'utiliser les fonctionnalités de base nécessaires pour rendre votre application React, telles que ReactDOM.render
import ReactDOM from 'react-dom/client';
// mise en place du routage de l'application avec React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from '../src/pages/Error';
import Fiche from './pages/Fiche';
import About from './pages/About';


//on définit root comme racine
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //configuration d'une seule route dans un format spécifique => si path != à l'un de ceux dans ce fichier alors "/404"
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
// reportWebVitals();
