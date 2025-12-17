// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  // Array de libros hardcodeado
  // Por ahora los datos están aquí, en versiones futuras los cargaremos de un archivo
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

  // Variable para el contador del carrito (por ahora fijo en 0)
  const cartCount = 0;

  // Renderizado del componente
  return (
    <div className="window">
      {/* Pasamos cartCount al Header como prop */}
      <Header cartCount={cartCount} />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Pasamos el array de libros al BookList como prop */}
          <div className="pane">
            <BookList books={books} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente
export default App;
