# Props: Child to Parent (Hijo a Padre)

## ¿Qué es la Comunicación Hijo a Padre?

En React, los componentes hijos **no pueden enviar datos directamente** al componente padre. Para lograr esta comunicación, el padre pasa una **función callback** como prop al hijo, y el hijo ejecuta esa función cuando necesita enviar datos hacia arriba.

## Conceptos Esenciales

### 1. Flujo de Comunicación
- El **padre** define una función y la pasa como prop al hijo
- El **hijo** recibe la función a través de props
- Cuando el hijo necesita enviar datos, **ejecuta la función** pasando los datos como argumentos
- La función se ejecuta en el **contexto del padre**, actualizando su estado

### 2. Patrón Callback

**Paso 1 - El padre crea una función:**
```jsx
const handleData = (data) => {
  setEstado(data);  // Actualiza el estado del padre
};
```

**Paso 2 - El padre pasa la función al hijo:**
```jsx
<ComponenteHijo onEvent={handleData} />
```

**Paso 3 - El hijo ejecuta la función:**
```jsx
function ComponenteHijo(props) {
  const enviarDatos = () => {
    props.onEvent(datoDelHijo);  // Ejecuta la función del padre
  };
}
```

## Ejemplo de este Proyecto

### Componente Padre (App.jsx)

```jsx
function App() {
  // Estado que se actualizará con datos del componente hijo
  const [user, setUser] = useState({});

  // PASO 1: Definimos la función callback que recibirá datos del hijo
  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);  // Actualizamos el estado con los datos del hijo
  };

  return (
    <>
      <h2>Saludos {user.username}!</h2>
      
      {/* PASO 2: Pasamos la función como prop al hijo */}
      <Login handleLogin={login} />
    </>
  );
}
```

### Componente Hijo (Login.jsx)

```jsx
function Login(props) {
  const user = {
    username: "Adrián",
    email: "adrian@email.com",
  };

  // PASO 3: El hijo ejecuta la función cuando ocurre un evento
  const handleClick = () => {
    // Llamamos a la función del padre y le pasamos los datos
    props.handleLogin(user);  // Esto envía datos al padre
  };

  return (
    <section>
      <h2>Login section</h2>
      <button onClick={handleClick}>Login</button>
    </section>
  );
}
```

## Flujo Completo del Ejemplo

1. El usuario hace clic en el botón "Login" en el componente hijo
2. Se ejecuta `handleClick()` en el componente Login (hijo)
3. `handleClick()` llama a `props.handleLogin(user)`
4. Esto ejecuta la función `login()` definida en App (padre)
5. La función `login()` actualiza el estado `user` con `setUser(userInfo)`
6. React re-renderiza y muestra el nombre de usuario en el saludo

## Casos de Uso Comunes

- **Formularios**: El hijo envía los datos del formulario al padre
- **Eventos de usuario**: Clicks, cambios de input, selecciones
- **Notificaciones**: El hijo informa al padre sobre cambios de estado
- **Validaciones**: El hijo envía resultados de validación al padre

## Diferencia con Props Padre → Hijo

| Padre → Hijo | Hijo → Padre |
|--------------|--------------|
| Se pasan datos directamente | Se pasa una función (callback) |
| `<Hijo dato={valor} />` | `<Hijo onEvent={funcion} />` |
| El hijo solo recibe | El hijo ejecuta la función |

## Ejecución del Proyecto

```bash
npm install
npm run dev
```
