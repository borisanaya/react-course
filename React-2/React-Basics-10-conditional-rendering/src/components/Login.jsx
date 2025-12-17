// Componente Login (HIJO)
// Este componente envía datos al padre cuando el usuario hace clic
function Login(props) {
  // Objeto con información del usuario simulado
  const user = {
    username: "Adrián",
    email: "adrian@email.com",
  };

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = () => {
    // Ejecutamos la función recibida del padre, enviándole los datos del usuario
    props.handleLogin(user);
  };

  return (
    <section>
      <h2>Login section</h2>
      {/* Al hacer clic, se ejecuta handleClick que envía datos al padre */}
      <button onClick={handleClick}>Login</button>
    </section>
  );
}

// Exportamos el componente
export default Login;
