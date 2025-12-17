# Cart-React - Your Book Store

Aplicación de carrito de compras de libros creada con React y Vite.

## Características

- ✅ Visualización de catálogo de libros
- ✅ Agregar libros al carrito con un click
- ✅ Contador de items en el carrito
- ✅ Ver y ocultar el carrito
- ✅ Eliminar libros del carrito
- ✅ Carga de datos desde archivo JSON usando fetch API
- ✅ Manejo de estado con useState
- ✅ Renderizado condicional
- ✅ Renderizado de listas con map
- ✅ Comunicación entre componentes con props y callbacks

## Técnicas de React utilizadas (React Basics)

Este proyecto utiliza las técnicas aprendidas en los proyectos React-Basics:

- **useState**: Manejo de estado (carrito, contador, visibilidad)
- **useEffect**: Carga de datos al montar el componente
- **Props**: Comunicación padre-hijo
- **Callbacks**: Comunicación hijo-padre
- **Conditional Rendering**: Mostrar/ocultar carrito
- **List Rendering**: Renderizar listas de libros con `.map()`
- **Fetch API**: Carga de datos desde JSON
- **Eventos**: Manejo de clicks

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Estructura del proyecto

```
cart-react/
├── public/
│   └── books.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BookList.jsx
│   │   ├── BookItem.jsx
│   │   └── Cart.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Diferencias con el proyecto original (vanilla JS)

- Usa componentes React en lugar de manipulación directa del DOM
- Estado manejado con hooks de React (useState, useEffect)
- Renderizado declarativo en lugar de construcción de strings HTML
- Mejor organización del código en componentes reutilizables
