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
  // Inicialmente es un array vacío
  const [books, setBooks] = useState([]);
  
  // Estado para almacenar los libros seleccionados en el carrito
  const [cartItems, setCartItems] = useState([]);
  
  // Estado para controlar si el carrito está visible u oculto
  const [showCart, setShowCart] = useState(false);

  // useEffect se ejecuta cuando el componente se monta
  // El array vacío [] como segundo parámetro significa "ejecutar solo una vez"
  useEffect(() => {
    // Fetch API para cargar los datos desde el archivo JSON
    // fetch() devuelve una promesa
    fetch('/books.json')
      .then(response => {
        // Convertimos la respuesta a JSON
        // response.json() también devuelve una promesa
        return response.json();
      })
      .then(data => {
        // Una vez que tenemos los datos, actualizamos el estado
        console.log('Libros cargados:', data);
        setBooks(data);
      })
      .catch(error => {
        // Si hay un error, lo mostramos en la consola
        console.error('Error loading books:', error);
      });
  }, []); // Array vacío: solo se ejecuta una vez al montar el componente

  // Función para agregar un libro al carrito
  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // Función para eliminar un libro del carrito por su índice
  const handleRemoveFromCart = (index) => {
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
            {/* Mientras no hay libros, mostramos un mensaje */}
            {books.length === 0 ? (
              <p>Cargando libros...</p>
            ) : (
              <BookList 
                books={books} 
                onAddToCart={handleAddToCart}
              />
            )}
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
