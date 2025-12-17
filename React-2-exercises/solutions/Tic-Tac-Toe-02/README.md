# Tic-Tac-Toe 02 - Introducción a Props

## Objetivo

Aprender a pasar datos de un componente padre a un componente hijo usando **props** (propiedades). En este proyecto, modificaremos el tablero para que cada casilla muestre un número diferente.

## ¿Qué aprenderás?

- Qué son las props en React
- Cómo pasar datos de padre a hijo
- Desestructuración de props
- Hacer componentes más dinámicos y reutilizables

## Requisitos Previos

- Haber completado Tic-Tac-Toe-01
- Entender la estructura básica de componentes

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Tic-Tac-Toe-01. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `tic-tac-toe-02`
3. Sigue las modificaciones indicadas abajo

## Modificaciones a Realizar

### Paso 1: Modificar Square.jsx para Recibir Props

**Antes (Tic-Tac-Toe-01):**
```jsx
function Square() {
    return <button className="square">X</button>;
}
```

**Después (Tic-Tac-Toe-02):**

**Archivo:** `src/components/Square.jsx`

```jsx
// Componente Square: representa una casilla individual del tablero
// Ahora recibe una prop "value" que determina qué mostrar en la casilla
// { value } es desestructuración de props - extrae la propiedad "value" del objeto props
function Square({ value }) {
    // Retorna un botón que muestra el valor recibido por props
    // {value} muestra el contenido dinámico que se pasó desde Board
    return <button className="square">{value}</button>;
}

// Exportamos el componente Square para poder usarlo en otros archivos
export default Square;
```

**Explicación:**
- `{ value }` es desestructuración: extrae la propiedad `value` del objeto props
- En lugar de mostrar "X" fijo, ahora mostramos `{value}`
- El valor viene del componente padre (Board)

### Paso 2: Modificar Board.jsx para Pasar Props

**Archivo:** `src/components/Board.jsx`

```jsx
// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
function Board() {
  return (
    <>
      {/* Primera fila del tablero - ahora cada casilla recibe un valor diferente */}
      <div className="board-row">
        {/* Pasamos la prop "value" a cada Square para mostrar números diferentes */}
        <Square value="1"/> {/* Casilla muestra "1" */}
        <Square value="2"/> {/* Casilla muestra "2" */}
        <Square value="3"/> {/* Casilla muestra "3" */}
      </div>
      
      {/* Segunda fila del tablero */}
      <div className="board-row">
        <Square value="4"/> {/* Casilla muestra "4" */}
        <Square value="5"/> {/* Casilla muestra "5" */}
        <Square value="6"/> {/* Casilla muestra "6" */}
      </div>
      
      {/* Tercera fila del tablero */}
      <div className="board-row">
        <Square value="7"/> {/* Casilla muestra "7" */}
        <Square value="8"/> {/* Casilla muestra "8" */}
        <Square value="9"/> {/* Casilla muestra "9" */}
      </div>
    </>
  );
}

// Exportamos el componente Board
export default Board;
```

**Explicación:**
- Cada `<Square value="1"/>` pasa un valor diferente al componente hijo
- `value="1"` es la sintaxis para pasar una prop
- El componente Square recibe estos valores y los muestra

## Resultado Esperado

Al ejecutar el proyecto verás:
- Un tablero de 3x3 casillas
- Cada casilla muestra un número del 1 al 9
- Las casillas son ordenadas: 1,2,3 / 4,5,6 / 7,8,9

## Conceptos Clave

### ¿Qué son las Props?

Las **props** (propiedades) son la forma en que los componentes React reciben datos:
- Van del componente **padre** al componente **hijo**
- Son **inmutables** (no se pueden modificar en el hijo)
- Son como los parámetros de una función

### Sintaxis de Props

**Pasar una prop:**
```jsx
<Square value="1"/>
```

**Recibir props (opción 1 - con props):**
```jsx
function Square(props) {
    return <button>{props.value}</button>;
}
```

**Recibir props (opción 2 - con desestructuración):**
```jsx
function Square({ value }) {
    return <button>{value}</button>;
}
```

La desestructuración es más limpia y es la forma preferida.

### Flujo de Datos

```
Board (padre)
   │
   ├─ pasa value="1" ──> Square (hijo) muestra "1"
   ├─ pasa value="2" ──> Square (hijo) muestra "2"
   └─ pasa value="3" ──> Square (hijo) muestra "3"
```

## Ejercicio Adicional

Prueba a modificar los valores que se pasan:
- Cambia los números por letras
- Intenta pasar "X" y "O" alternadamente
- Experimenta con otros valores

## Próximo Paso

En el siguiente proyecto (Tic-Tac-Toe-03) agregaremos **interactividad** usando `useState` para que las casillas respondan a los clics del usuario.

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar versión de producción
```


