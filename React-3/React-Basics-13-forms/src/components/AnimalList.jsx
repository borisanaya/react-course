function AnimalList() {
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

  const HTMLAnimals = animals.map((animal) => {
    return (
      <li key={animal.id}>
        <h3>{animal.name}</h3>
        <img src={animal.img} alt="animal picture" width="200" />
      </li>
    );
  });

  return (
    <section>
      <h2>Animals:</h2>
      <ul>
        {HTMLAnimals}
      </ul>
    </section>
  );
}

export default AnimalList;
