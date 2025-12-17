import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import CardComponent from "./components/CardComponent";
import ButtonComponent from "./components/ButtonComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="app">
      <HeaderComponent />

      <main className="main-content">
        <h2>Solución de Ejercicios React</h2>
        
        <section className="cards-container">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </section>

        <section className="buttons-container">
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}

export default App;
