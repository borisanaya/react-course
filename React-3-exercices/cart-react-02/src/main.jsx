// Importamos React y StrictMode para ayudar a identificar problemas potenciales
import { StrictMode } from 'react'
// createRoot es el método moderno para renderizar aplicaciones React
import { createRoot } from 'react-dom/client'
// Importamos los estilos globales
import './index.css'
// Importamos el componente principal de la aplicación
import App from './App.jsx'

// Creamos la raíz de la aplicación React en el elemento con id "root"
// y renderizamos el componente App envuelto en StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
