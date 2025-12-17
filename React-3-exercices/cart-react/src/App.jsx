// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los hooks de React que vamos a utilizar
import { useState, useEffect } from "react";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

// Componente principal de la aplicación
function App() {
  // Estado para almacenar los libros cargados desde el JSON
  const [books, setBooks] = useState([]);
  
  // Estado para almacenar los libros seleccionados en el carrito
  const [cartItems, setCartItems] = useState([]);
  
  // Estado para controlar si el carrito está visible u oculto
  const [showCart, setShowCart] = useState(false);

  // useEffect se ejecuta cuando el componente se monta
  // Lo usamos para cargar los libros desde el archivo JSON
  useEffect(() => {
    // Fetch API para cargar los datos
    fetch('/books.json')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => console.error('Error loading books:', error));
  }, []); // Array vacío significa que solo se ejecuta una vez al montar

  // Función para agregar un libro al carrito
  // Recibe el libro desde el componente hijo (BookItem)
  const handleAddToCart = (book) => {
    // Agregamos el libro al array de cartItems
    setCartItems([...cartItems, book]);
  };

  // Función para eliminar un libro del carrito por su índice
  const handleRemoveFromCart = (index) => {
    // Creamos una copia del array sin el elemento en el índice especificado
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Función para mostrar/ocultar el carrito
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  // Renderizado del componente
  return (
    <div className="window">
      {/* Header con el título y contador */}
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

// Exportamos el componente para poder usarlo en main.jsx
export default App;
