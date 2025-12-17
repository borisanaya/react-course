# React Basics 14 - Fetch API

Proyecto educativo para aprender a consumir APIs en React usando diferentes métodos.

## Conceptos Esenciales

### ¿Qué es Fetch API?
Fetch API es una interfaz de JavaScript que permite hacer peticiones HTTP para obtener datos de servidores externos (APIs). En React, se usa para cargar datos dinámicos desde el backend o APIs públicas.

### useEffect para Peticiones
```javascript
useEffect(() => {
  // Código que se ejecuta al montar el componente
}, []); // [] = solo se ejecuta una vez
```
- `useEffect` es el hook ideal para peticiones HTTP
- El array vacío `[]` asegura que la petición se haga **solo una vez** al cargar el componente
- Sin el array, se ejecutaría en cada render (¡evitar!)

### Dos Métodos Principales

#### 1. Fetch Nativo
```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())  // Convertir a JSON
  .then(data => setData(data));       // Guardar en estado
```

#### 2. Axios (Recomendado)
```javascript
axios.get("https://api.example.com/data")
  .then(response => setData(response.data));
```

**Ventajas de Axios:**
- Convierte automáticamente a JSON
- Mejor manejo de errores
- Sintaxis más limpia

## En Este Proyecto

### Componente `MemeList.jsx`
Obtiene memes de la API de Imgflip y los muestra:

1. **Estado inicial**: `useState([])` - array vacío
2. **Petición HTTP**: `useEffect` con axios al API
3. **Actualizar estado**: `setMemes(datos)` con la respuesta
4. **Renderizar**: `map()` para crear elementos HTML

### Flujo de Datos
```
Componente carga → useEffect ejecuta → Petición HTTP → 
Respuesta API → setMemes actualiza estado → Re-render con datos
```

## Instalación

```bash
npm install
npm run dev
```

## Dependencias Clave
- **axios**: Cliente HTTP para peticiones
- **react**: Biblioteca principal
- **vite**: Herramienta de desarrollo rápida
