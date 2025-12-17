import { useEffect } from "react";

function MovieList() {
  const movies = ["Lord of the Rings", "Star Wars", "Dune"];

  const HTMLMovies = movies.map((movie, index) => {
    return (
      <p key={movie}>
        {index + 1} - {movie}
      </p>
    );
  });

  useEffect(() => {
    console.log("Ejecución cuando se monta el componente MovieList");
  }, []);

  // useEffect(() => {
  //   console.log("Ejecución con cada renderización de MovieList");
  // });

  useEffect(() => {
    return () => {
      console.log("Ejecución cuando se destruye el componente MovieList");
    };
  });

  return (
    <section>
      <h2>Movies:</h2>

      {HTMLMovies}
    </section>
  );
}

export default MovieList;
