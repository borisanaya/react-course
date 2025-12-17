import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import AnimalList from "./components/AnimalList";
import { useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  const [user, setUser] = useState({});

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  };

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {user.username && <h2>Saludos {user.username}!</h2>}
        <Login handleLogin={login}></Login>

        <MovieList></MovieList>
        <AnimalList></AnimalList>
      </main>
    </>
  );
}

export default App;
