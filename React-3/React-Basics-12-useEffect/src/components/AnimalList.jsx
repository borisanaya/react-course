// Componente que muestra una lista de animales con imágenes
function AnimalList() {
  // Array de objetos, cada objeto representa un animal con sus propiedades
  const animals = [
    {
      id: 1,
      name: "dog",
      img: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
    },
    {
      id: 2,
      name: "cat",
      img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
    },
    {
      id: 3,
      name: "bird",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg",
    },
  ];

  // Transformamos el array de animales en elementos HTML usando map()
  // Cada animal se convierte en un <li> con su nombre e imagen
  const HTMLAnimals = animals.map((animal) => {
    return (
      // Usamos animal.id como key para identificar cada elemento de forma única
      <li key={animal.id}>
        <h3>{animal.name}</h3>
        {/* Mostramos la imagen del animal con ancho fijo de 200px */}
        <img src={animal.img} alt="animal picture" width="200" />
      </li>
    );
  });

  // Renderizamos una lista HTML con todos los animales
  return (
    <section>
      <h2>Animals:</h2>
      <ul>
        {/* Insertamos todos los elementos <li> generados con map() */}
        {HTMLAnimals}
      </ul>
    </section>
  );
}

// Exportamos el componente
export default AnimalList;
