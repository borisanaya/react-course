# React Basics 13 - Forms

Proyecto educativo para aprender a manejar formularios en React, capturando datos del usuario y controlando el envío.

## Conceptos Esenciales

### ¿Por Qué los Formularios son Diferentes en React?
En HTML tradicional, los formularios mantienen su propio estado interno. En React, el estado debe ser controlado por el componente para tener control total sobre los datos.

### Eventos Clave en Formularios

#### 1. onChange
```javascript
<input 
  type="text" 
  onChange={(e) => setField(e.target.value)} 
/>
```
- Se ejecuta **cada vez que el usuario escribe** en el input
- `e.target.value` contiene el valor actual del input
- Permite capturar datos en tiempo real

#### 2. onSubmit
```javascript
<form onSubmit={handleSubmit}>
  {/* inputs */}
  <button>Enviar</button>
</form>
```
- Se ejecuta cuando se **envía el formulario**
- Se activa al hacer clic en el botón o presionar Enter
- Debe usarse en el `<form>`, no en el botón

#### 3. e.preventDefault()
```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // ¡IMPORTANTE!
  // Procesar datos...
};
```
- **Evita que la página se recargue** (comportamiento por defecto)
- Siempre debe ser la primera línea en handleSubmit
- Sin esto, el formulario causará una recarga de página

### Patrones para Actualizar Campos

#### Método Simple (un campo)
```javascript
const handleUsername = (e) => {
  user.username = e.target.value;
};
```

#### Método Genérico (múltiples campos)
```javascript
const setUserField = (e, field) => {
  user[field] = e.target.value;
};

// Uso:
onChange={(e) => setUserField(e, "username")}
onChange={(e) => setUserField(e, "email")}
```
**Ventaja**: Una función para todos los campos, código más limpio y escalable.

### Conectar Label con Input
```javascript
<label htmlFor="username">Username:</label>
<input type="text" id="username" />
```
- `htmlFor` en React (en HTML sería `for`)
- Mejora la accesibilidad y UX
- Al hacer clic en el label, se enfoca el input

## En Este Proyecto

### Componente `Login.jsx`
Formulario completo con dos campos:

1. **Objeto user**: Almacena username y email
2. **setUserField**: Función genérica que actualiza cualquier campo
3. **handleSubmit**: Envía datos al componente padre (App)
4. **onChange**: Captura texto mientras el usuario escribe

### Componente `App.jsx`
Recibe y maneja los datos del formulario:

1. **Estado user**: Almacena la información después del login
2. **Función login**: Recibe datos del formulario hijo
3. **Renderizado condicional**: Muestra saludo solo si hay username

### Flujo de Datos
```
Usuario escribe → onChange actualiza objeto user →
Usuario hace clic en Login → onSubmit ejecuta handleSubmit →
e.preventDefault() evita recarga → 
props.handleLogin envía datos a App →
App actualiza estado con setUser →
Se muestra saludo con user.username
```

## Instalación

```bash
npm install
npm run dev
```

## Conceptos Relacionados
- **Controlled Components**: React controla el valor del input
- **Uncontrolled Components**: El DOM mantiene el estado (no recomendado)
- **Props**: Comunicación de componente hijo a padre mediante funciones
- **Renderizado condicional**: Mostrar contenido solo si una condición es verdadera
