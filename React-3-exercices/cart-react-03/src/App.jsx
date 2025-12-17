// Importamos los estilos de la aplicación
import "./App.css";
// Importamos useState - hook para manejar estado en componentes funcionales
import { useState } from "react";
// Importamos los componentes
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  // Array de libros (aún hardcodeado)
  const books = [
    {
      title: "Q",
      author: "Luther Blissett",
      img: "0.jpg"
    },
    {
      title: "El amor en tiempos de cólera",
      author: "Gabriel García Márquez",
      img: "1.jpg"
    },
    {
      title: "Watchmen",
      author: "Alan Moore y Dave Gibbons",
      img: "2.jpg"
    }
  ];

  // useState para manejar el estado del carrito
  // cartItems: array que contiene los libros agregados al carrito
  // setCartItems: función para actualizar el estado
  // useState([]): valor inicial del estado (array vacío)
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un libro al carrito
  // Esta función se pasará como prop a los componentes hijos
  const handleAddToCart = (book) => {
    // Agregamos el libro al array usando el spread operator
    // [...cartItems, book] crea un nuevo array con todos los items anteriores + el nuevo
    // IMPORTANTE: No modificamos el array directamente (inmutabilidad)
    setCartItems([...cartItems, book]);
    
    // Mostramos en consola para ver qué está pasando
    console.log('Libro agregado:', book.title);
    console.log('Total items en carrito:', cartItems.length + 1);
  };

  // Renderizado del componente
  return (
    <div className="window">
      {/* Pasamos el número de items en el carrito al Header */}
      <Header cartCount={cartItems.length} />
      
      <div className="window-content">
        <div className="pane-group">
          <div className="pane">
            {/* Pasamos los libros Y la función handleAddToCart */}
            <BookList 
              books={books} 
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente
export default App;
