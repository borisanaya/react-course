# Conditional Rendering (Renderizado Condicional)

## ¿Qué es el Renderizado Condicional?

El **renderizado condicional** en React es la técnica de mostrar u ocultar elementos de la interfaz según ciertas condiciones. Permite que los componentes decidan qué contenido renderizar basándose en el estado, props o cualquier expresión JavaScript.

## Conceptos Esenciales

### 1. Truthy y Falsy en JavaScript
React solo renderiza valores **truthy**. Algunos valores **falsy** comunes:
- `false`, `null`, `undefined`, `0`, `""` (string vacío), `NaN`

### 2. Técnicas de Renderizado Condicional

## Método 1: Operador && (AND Lógico)

Renderiza el componente **solo si** la condición es verdadera.

**Sintaxis:**
```jsx
{condicion && <Componente />}
```

**Ejemplos del proyecto:**
```jsx
// Solo muestra el saludo si user.username existe
{user.username && <h2>Saludos {user.username}!</h2>}

// Solo muestra el mensaje si condition es true
{condition && <h2>La condición se cumple</h2>}

// Solo muestra el mensaje si condition es false (usando negación)
{!condition && <h2>La condición No se cumple</h2>}
```

**Cuándo usar:**
- Mostrar algo **solo si** una condición es verdadera
- Ocultar elementos cuando no hay datos

## Método 2: Operador Ternario (? :)

Renderiza **una cosa o la otra** según la condición.

**Sintaxis:**
```jsx
{condicion ? <ComponenteA /> : <ComponenteB />}
```

**Ejemplo del proyecto:**
```jsx
{condition ? (
  <h2>La condición se cumple</h2>
) : (
  <h2>La condición No se cumple</h2>
)}
```

**Cuándo usar:**
- Mostrar una de **dos opciones**
- Cambiar entre estados (logueado/no logueado, activo/inactivo)

## Comparación de Métodos

| Método | Uso | Resultado si false |
|--------|-----|-------------------|
| `&&` | Una opción | No renderiza nada |
| `? :` | Dos opciones | Renderiza la alternativa |

## Ejemplo Práctico del Proyecto

```jsx
function App() {
  const [user, setUser] = useState({});
  const condition = false;

  return (
    <>
      {/* Método 1: && - Solo muestra si hay username */}
      {user.username && <h2>Saludos {user.username}!</h2>}

      {/* Método 1: && con condición positiva */}
      {condition && <h2>La condición se cumple</h2>}

      {/* Método 1: && con negación (!) */}
      {!condition && <h2>La condición No se cumple</h2>}

      {/* Método 2: Operador ternario - Muestra una u otra */}
      {condition ? (
        <h2>La condición se cumple</h2>
      ) : (
        <h2>La condición No se cumple</h2>
      )}
    </>
  );
}
```

## Flujo del Ejemplo

1. Usuario inicia sin datos → `user = {}`
2. `user.username` no existe (es `undefined` - falsy)
3. El saludo **no se muestra** porque la condición es falsy
4. Usuario hace clic en "Login"
5. `user` se actualiza con `{username: "Adrián", email: "..."}`
6. `user.username` ahora existe (es `"Adrián"` - truthy)
7. El saludo **se muestra** porque la condición es truthy

## Casos de Uso Comunes

- **Mensajes de bienvenida**: Mostrar solo si hay usuario logueado
- **Estados de carga**: Mostrar spinner mientras se cargan datos
- **Mensajes de error**: Mostrar solo si hay error
- **Permisos**: Mostrar opciones según rol del usuario
- **Estados vacíos**: Mostrar mensaje cuando no hay datos

## Ejecución del Proyecto

```bash
npm install
npm run dev
```

**Prueba:** Cambia `const condition = false` a `true` en App.jsx para ver los diferentes resultados del renderizado condicional.
