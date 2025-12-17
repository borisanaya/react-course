# Your Book Store - Versión Vanilla JavaScript

## Descripción

Esta es la versión **JavaScript puro (vanilla)** de la aplicación "Your Book Store". Es un carrito de compras de libros implementado sin frameworks, usando únicamente HTML, CSS y JavaScript estándar.

## Características

- Catálogo de libros con imágenes
- Carrito de compras interactivo
- Contador de items en el carrito
- Agregar/eliminar libros del carrito
- Carga de datos desde JSON con Fetch API
- Manipulación del DOM nativa

## Tecnologías

- **HTML5** - Estructura
- **CSS3** - Estilos
- **JavaScript ES6+** - Lógica (sin frameworks)
- **Fetch API** - Carga de datos

## Estructura del Proyecto

```
cart/
├── index.html          # Estructura HTML principal
├── app.js              # Lógica JavaScript
├── css/
│   └── styles.css      # Estilos de la aplicación
├── data/
│   └── books.json      # Datos de los libros
└── images/             # Imágenes de portadas
```

## Cómo Ejecutar

 Live Server (VS Code)


## Conceptos JavaScript Implementados

- **Manipulación del DOM**: `getElementById`, `innerHTML`
- **Event Listeners**: `addEventListener('click', ...)`
- **Fetch API**: Carga asíncrona de datos JSON
- **Arrow Functions**: Sintaxis moderna de funciones
- **Template Literals**: Construcción dinámica de HTML
- **Array Methods**: `forEach`, `filter`, `reduce`
- **Array Operations**: `push`, manipulación de arrays

## Comparación con React

Esta versión vanilla es la base para entender los beneficios de React:

| Aspecto | Vanilla JS | React (cart-react) |
|---------|------------|-------------------|
| DOM | Manipulación manual | Virtual DOM |
| Estado | Variables globales | useState hooks |
| UI Updates | innerHTML completo | Re-render eficiente |
| Componentes | Funciones | Componentes JSX |
| Estructura | Monolítica | Modular |

## Funcionalidades

1. **Cargar libros**: Los datos se cargan desde `data/books.json`
2. **Ver catálogo**: Panel izquierdo muestra todos los libros
3. **Agregar al carrito**: Click en una portada agrega el libro
4. **Ver carrito**: Panel derecho muestra items seleccionados
5. **Contador**: Header muestra total de items
6. **Eliminar items**: Cada item tiene botón para eliminarlo


---

**Vanilla JavaScript - Sin frameworks, máximo aprendizaje**
