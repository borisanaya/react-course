
## List Rendering en React

List rendering (renderizado de listas) es una técnica fundamental en React para mostrar colecciones de datos de forma dinámica. Utilizando el método `map()` de JavaScript, puedes recorrer un array y renderizar un componente para cada elemento.

### Ejemplo en este proyecto

En el proyecto **React-Basics-11-list-rendering** se muestran dos ejemplos prácticos:

#### 1. Renderizado de una lista de películas

En el componente `MovieList`, se parte de un array de películas y se utiliza `map()` para generar un elemento `<p>` por cada película:

```jsx
function MovieList() {
	const movies = ["Lord of the Rings", "Star Wars", "Dune"];
	return (
		<section>
			<h2>Movies:</h2>
			{movies.map((movie, index) => (
				<p key={movie}>{index + 1} - {movie}</p>
			))}
		</section>
	);
}
```

#### 2. Renderizado de una lista de objetos (animales)

En el componente `AnimalList`, se parte de un array de objetos con información de animales. Se renderiza cada animal como un elemento `<li>` con imagen y nombre:

```jsx
function AnimalList() {
	const animals = [
		{ id: 1, name: "dog", img: "..." },
		{ id: 2, name: "cat", img: "..." },
		{ id: 3, name: "bird", img: "..." },
	];
	return (
		<section>
			<h2>Animals:</h2>
			<ul>
				{animals.map((animal) => (
					<li key={animal.id}>
						<h3>{animal.name}</h3>
						<img src={animal.img} alt="animal picture" width="200" />
					</li>
				))}
			</ul>
		</section>
	);
}
```

**Puntos clave en el ejemplo:**
- Se usa la prop `key` para identificar cada elemento de la lista y mejorar el rendimiento.
- Se pueden renderizar listas de strings, objetos, componentes personalizados, etc.
- El renderizado de listas permite mostrar datos dinámicos como películas, animales, usuarios, productos, etc.

Estos componentes se integran en el archivo principal `App.jsx`, mostrando cómo combinar varios list renderings en una misma aplicación React.
