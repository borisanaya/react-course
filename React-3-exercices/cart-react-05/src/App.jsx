// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los hooks de React que vamos a utilizar
import { useState } from "react";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

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
  
  // Estado para almacenar los libros seleccionados en el carrito
  const [cartItems, setCartItems] = useState([]);
  
  // Estado para controlar si el carrito está visible u oculto
  const [showCart, setShowCart] = useState(false);

  // Función para agregar un libro al carrito
  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // Función para eliminar un libro del carrito por su índice
  const handleRemoveFromCart = (index) => {
    // .filter() crea un nuevo array excluyendo el elemento en el índice especificado
    // (item, i) => i !== index: mantiene todos los elementos excepto el del índice
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Función para mostrar/ocultar el carrito
  const handleToggleCart = () => {
    // Invertimos el valor booleano: true -> false, false -> true
    setShowCart(!showCart);
  };

  // Renderizado del componente
  return (
    <div className="window">
      {/* Header con el título y contador clickeable */}
      <Header 
        cartCount={cartItems.length} 
        onToggleCart={handleToggleCart}
      />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Panel izquierdo: Lista de libros */}
          <div className="pane">
            <BookList 
              books={books} 
              onAddToCart={handleAddToCart}
            />
          </div>
          
          {/* Panel derecho: Carrito (renderizado condicional) */}
          {/* Solo se renderiza si showCart es true */}
          {showCart && (
            <Cart 
              cartItems={cartItems} 
              onRemoveFromCart={handleRemoveFromCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente
export default App;
