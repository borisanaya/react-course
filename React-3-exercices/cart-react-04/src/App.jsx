// Importamos los estilos de la aplicación
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  // Ampliamos el array de libros con más elementos
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
    },
    {
      title: "54",
      author: "Wu Ming",
      img: "3.jpg"
    },
    {
      title: "El ejército de los sonámbulos",
      author: "Wu Ming",
      img: "4.jpg"
    },
    {
      title: "Maus",
      author: "Art Spiegelman",
      img: "5.jpg"
    }
  ];

  // Estado del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un libro al carrito
  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // Renderizado del componente
  return (
    <div className="window">
      <Header cartCount={cartItems.length} />
      
      <div className="window-content">
        <div className="pane-group">
          <div className="pane">
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

export default App;
