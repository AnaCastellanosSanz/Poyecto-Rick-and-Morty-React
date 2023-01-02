import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Components/App';
//Primeramente hay que instalar npm install react-router-dom para poder trabajar con rutas, despues se importa y después la parte de abajo.
import { BrowserRouter } from "react-router-dom"

//ReactDOM pinta en el HTML todos los elementos
const root = ReactDOM.createRoot(document.getElementById('root'));
//Renderizame al componente principal que va a ser App, en el index.js solo renderizo al componente principal.
root.render(
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);

