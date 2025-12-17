# Props: Parent to Child (Padre a Hijo)

## ¿Qué son las Props?

Las **props** (propiedades) son el mecanismo de React para pasar datos de un componente **padre** a un componente **hijo**. Funcionan como los argumentos de una función.

## Conceptos Esenciales

### 1. Flujo Unidireccional
- Los datos fluyen **de arriba hacia abajo** (del padre al hijo)
- Los hijos **reciben** las props, pero **no pueden modificarlas** directamente
- Las props son de **solo lectura** para el componente hijo

### 2. Sintaxis Básica

**En el componente padre:**
```jsx
<ComponenteHijo nombreProp={valor} />
```

**En el componente hijo:**
```jsx
function ComponenteHijo(props) {
  return <div>{props.nombreProp}</div>;
}
```

## Ejemplo de este Proyecto

### Componente Padre (App.jsx)
```jsx
function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  const links = { home: "Home", blog: "Blog", news: "News", contact: "Contact Us" };

  return (
    <>
      {/* Pasamos props al componente hijo */}
      <HeaderComponent greetings={greetings} links={links} />
      <ButtonComponent text={"Click Me"} />
    </>
  );
}
```

### Componente Hijo (HeaderComponent.jsx)
```jsx
function HeaderComponent(props) {
  // Desestructuramos las props recibidas
  const { greetings, links } = props;

  return (
    <header>
      <h1>{greetings}</h1>  {/* Usamos la prop */}
      <nav>
        <a>{links.home}</a>  {/* Usamos el objeto prop */}
      </nav>
    </header>
  );
}
```

### Componente Hijo (ButtonComponent.jsx)
```jsx
function ButtonComponent(props) {
  return <button>{props.text}</button>;  {/* Acceso directo a props */}
}
```

## Tipos de Datos que se Pueden Pasar

- **Strings**: `text="Hola"`
- **Numbers**: `edad={25}`
- **Booleans**: `activo={true}`
- **Arrays**: `items={[1, 2, 3]}`
- **Objetos**: `links={{home: "Home", blog: "Blog"}}`
- **Funciones**: `onClick={handleClick}`
- **Estado (useState)**: `valor={state}`

## Ejecución del Proyecto

```bash
npm install
npm run dev
```
