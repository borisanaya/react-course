// Importamos el hook useEffect para ejecutar efectos secundarios
import { useEffect } from "react";

// Componente que demuestra los diferentes usos de useEffect
function MovieList() {
  // Array simple de películas
  const movies = ["Lord of the Rings", "Star Wars", "Dune"];

  // Transformamos el array de películas en elementos JSX usando map()
  // 'index' nos da la posición de cada elemento en el array
  const HTMLMovies = movies.map((movie, index) => {
    return (
      // key es necesario para que React identifique cada elemento
      <p key={movie}>
        {index + 1} - {movie}
      </p>
    );
  });

  // EJEMPLO 1: useEffect con array VACÍO []
  // Se ejecuta UNA SOLA VEZ cuando el componente se MONTA (aparece en pantalla)
  // Es el equivalente a componentDidMount en componentes de clase
  useEffect(() => {
    console.log("Ejecución cuando se monta el componente MovieList");
  }, []); // [] = sin dependencias = solo al montar

  // EJEMPLO 2 (comentado): useEffect SIN array de dependencias
  // Se ejecutaría en CADA renderización (cada vez que el componente se actualiza)
  // useEffect(() => {
  //   console.log("Ejecución con cada renderización de MovieList");
  // });

  // EJEMPLO 3: useEffect con función de LIMPIEZA (cleanup)
  // El return dentro de useEffect se ejecuta cuando el componente se DESMONTA
  // Útil para limpiar: timers, suscripciones, listeners, etc.
  useEffect(() => {
    return () => {
      // Esta función se ejecuta al desmontar el componente (cuando desaparece de pantalla)
      console.log("Ejecución cuando se destruye el componente MovieList");
    };
  }, []); // [] = la limpieza se ejecuta solo al desmontar

  // Renderizamos la sección con las películas
  return (
    <section>
      <h2>Movies:</h2>

      {HTMLMovies}
    </section>
  );
}

// Exportamos el componente
export default MovieList;
