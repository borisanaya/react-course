// Importamos axios, una librería para hacer peticiones HTTP de manera sencilla
import axios from "axios";
// Importamos los estilos para este componente
import "./MemeList.css";
// Importamos los hooks useEffect y useState de React
import { useEffect, useState } from "react";

// Componente que muestra una lista de memes obtenidos de una API
function MemeList() {
  // useState crea un estado 'memes' que inicialmente es un array vacío
  // setMemes es la función para actualizar ese estado
  const [memes, setMemes] = useState([]);

  // Transformamos el array de memes en elementos HTML usando map()
  // map() recorre cada meme y crea un <li> por cada uno
  const HTMLmemes = memes.map((meme) => {
    return (
      // key es importante para que React identifique cada elemento de la lista
      <li key={meme.id} className="meme-item">
        {/* Mostramos el nombre del meme */}
        <h2>{meme.name}</h2>
        {/* Mostramos la imagen del meme */}
        <img src={meme.url} alt="meme img" className="meme-img" />
      </li>
    );
  });

  // MÉTODO 1: Usando fetch nativo de JavaScript (comentado)
  // useEffect se ejecuta después de que el componente se monte en el DOM
  // useEffect(() => {
  //   // fetch hace una petición HTTP a la API de memes
  //   fetch("https://api.imgflip.com/get_memes")
  //     // Convertimos la respuesta a JSON
  //     .then((response) => response.json())
  //     // Actualizamos el estado con los datos recibidos
  //     .then((data) => {
  //       console.log(data);
  //       setMemes(data.data.memes);
  //     });
  // }, []); // El array vacío [] significa que solo se ejecuta una vez al montar el componente

  // MÉTODO 2: Usando axios (más simple y con mejor manejo de errores)
  useEffect(() => {
    // axios.get hace una petición GET a la API
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      // Mostramos los datos en la consola para ver qué recibimos
      console.log(response.data);
      // Actualizamos el estado 'memes' con los datos de la API
      // response.data.data.memes contiene el array de memes
      setMemes(response.data.data.memes);
    });
  }, []); // [] significa que este efecto solo se ejecuta una vez, al montar el componente

  // Renderizamos una lista <ul> con todos los memes transformados a HTML
  return <ul className="meme-list">{HTMLmemes}</ul>;
}

// Exportamos el componente para poder usarlo en otros archivos
export default MemeList;
