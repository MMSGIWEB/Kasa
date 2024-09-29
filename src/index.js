//importation de la bibliothèque React dans le code
import React from 'react';
// permet d'utiliser les fonctionnalités de base nécessaires 
//pour rendre votre application React, telles que ReactDOM.render
import ReactDOM from 'react-dom/client';
// importation des modules suivantes 
//pour la mise en place du routage de l'application avec React-Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from '../src/pages/Error';
import Fiche from './pages/Fiche';
import About from './pages/About';


const router = createBrowserRouter([
  {//"chemin"
    path: "/",
    //"associé au composant:"
    element: <App />,
    //configuration d'une seule route dans un format spécifique 
    //=> si path != à l'un de ceux dans ce fichier alors "/404"
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
      </>,
    errorElement:
      <>
        <Error />
      </>
  },
  {//chemin avec paramètre URL avec id unique
    path: "/fiche/:id",
    element:
      <>
        <Fiche />
      </>
  },
  {
    path: "/404",
    element:
      <>
        <Error />
      </>
  }
])

//on définit root comme racine avec cette méthode
const root = ReactDOM.createRoot(document.getElementById('root'));
//initialise le rendu initial de l'appli
root.render(
  //composant dans 'react-router-dom' qui enveloppe l'appli afin de gérer les routes
  <React.StrictMode>
    {/* //objet router en tant que prop */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
