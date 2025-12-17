// Importamos React y ReactDOM para poder usar React en nuestro proyecto
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importamos el componente principal App
import App from './App.jsx'
// Importamos los estilos globales
import './index.css'

// ReactDOM.createRoot crea el punto de entrada de nuestra aplicación React
// Buscamos el elemento con id='root' en el HTML y montamos nuestra aplicación ahí
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode es un modo que ayuda a detectar problemas en el código
  <React.StrictMode>
    {/* Aquí renderizamos nuestro componente principal App */}
    <App />
  </React.StrictMode>,
)
