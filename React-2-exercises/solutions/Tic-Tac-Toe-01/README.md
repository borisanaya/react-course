# Tic-Tac-Toe 01 - Estructura Básica del Tablero

## Objetivo

Crear la estructura básica del juego Tic-Tac-Toe (Tres en Línea) con componentes React. En esta primera etapa, crearemos un tablero estático de 3x3 con todas las casillas mostrando "X".

## ¿Qué aprenderás?

- Crear componentes React básicos
- Organizar componentes en carpetas
- Composición de componentes (componentes dentro de componentes)
- Estructura de un proyecto React con Vite

## Requisitos Previos

- Node.js instalado (versión 16 o superior)
- Editor de código (VS Code recomendado)
- Extensión de VS Code: ES7 + React/Redux/React-Native snippets

## Configuración Inicial del Proyecto

1. **Crea un nuevo proyecto con Vite:**
   ```bash
   npm create vite@latest tic-tac-toe-01
   ```

2. **Selecciona las opciones:**
   - Framework: `React`
   - Variante: `JavaScript`

3. **Instala las dependencias:**
   ```bash
   cd tic-tac-toe-01
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Paso 1: Crear el Componente Square

Crea una carpeta `components` dentro de `src`:

**Archivo:** `src/components/Square.jsx`

```jsx
// Componente Square: representa una casilla individual del tablero
// Por ahora, todas las casillas muestran "X" de forma estática
function Square() {
    // Retorna un botón que representa una casilla del tablero
    // La clase "square" se usa para aplicar estilos CSS
    return <button className="square">X</button>;
}

// Exportamos el componente Square para poder usarlo en otros archivos
export default Square;
```

**Explicación:**
- `Square` es un componente funcional simple
- Retorna un botón con la clase CSS "square"
- Por ahora, todos los botones muestran "X"

## Paso 2: Crear el Componente Board

**Archivo:** `src/components/Board.jsx`

```jsx
// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
function Board() {
  return (
    <>
      {/* Primera fila del tablero - contiene 3 casillas */}
      <div className="board-row">
        <Square /> {/* Casilla 1 */}
        <Square /> {/* Casilla 2 */}
        <Square /> {/* Casilla 3 */}
      </div>
      
      {/* Segunda fila del tablero - contiene 3 casillas */}
      <div className="board-row">
        <Square /> {/* Casilla 4 */}
        <Square /> {/* Casilla 5 */}
        <Square /> {/* Casilla 6 */}
      </div>
      
      {/* Tercera fila del tablero - contiene 3 casillas */}
      <div className="board-row">
        <Square /> {/* Casilla 7 */}
        <Square /> {/* Casilla 8 */}
        <Square /> {/* Casilla 9 */}
      </div>
    </>
  );
}

// Exportamos el componente Board
export default Board;
```

**Explicación:**
- `Board` renderiza 9 componentes `Square`
- Los organiza en 3 filas usando `div` con clase "board-row"
- Cada fila contiene 3 casillas

## Paso 3: Modificar App.jsx

**Archivo:** `src/App.jsx`

```jsx
// Importamos los estilos del componente App
import "./App.css";
// Importamos el componente Board (tablero del juego)
import Board from "./components/Board";

// Componente principal de la aplicación
function App() {
  return (
     <>
        {/* Renderizamos el componente Board que contiene todo el tablero */}
        <Board></Board>
    </>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default App;
```

## Paso 4: Agregar Estilos CSS

**Archivo:** `src/App.css`

Agrega los siguientes estilos:

```css
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.board-row:after {
  clear: both;
  content: '';
  display: table;
}

.status {
  margin-bottom: 10px;
}
```

## Estructura del Proyecto Final

```
tic-tac-toe-01/
├── src/
│   ├── components/
│   │   ├── Board.jsx         # Tablero con 9 casillas
│   │   └── Square.jsx        # Casilla individual
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos
│   └── main.jsx              # Punto de entrada
├── package.json
└── vite.config.js
```

## Resultado Esperado

Al ejecutar el proyecto verás:
- Un tablero de 3x3 casillas
- Todas las casillas muestran "X"
- Las casillas tienen bordes y están organizadas en filas

## Conceptos Clave

1. **Componentes:** Bloques reutilizables de código (Square, Board)
2. **Composición:** Un componente puede usar otros componentes (Board usa Square)
3. **JSX:** Sintaxis que parece HTML pero es JavaScript
4. **Export/Import:** Forma de compartir componentes entre archivos

## Próximo Paso

En el siguiente proyecto (Tic-Tac-Toe-02) aprenderemos a pasar datos a los componentes usando **props** para que cada casilla muestre un valor diferente.

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de producción
```


