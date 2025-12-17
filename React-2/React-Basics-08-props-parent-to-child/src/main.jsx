// Importamos React y ReactDOM, las bibliotecas principales para crear aplicaciones React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importamos el componente principal de nuestra aplicación
import App from './App.jsx'
// Importamos los estilos globales
import './index.css'

// ReactDOM.createRoot() crea el punto de entrada de nuestra aplicación React
// document.getElementById('root') busca el elemento HTML con id="root" en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode es una herramienta que nos ayuda a detectar problemas potenciales en la aplicación
  <React.StrictMode>
    {/* Aquí renderizamos nuestro componente principal App */}
    <App />
  </React.StrictMode>,
)
