// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  return (
    <div className="window">
      {/* Header con el título y contador */}
      <Header />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Panel con la lista de libros */}
          <div className="pane">
            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en main.jsx
export default App;
