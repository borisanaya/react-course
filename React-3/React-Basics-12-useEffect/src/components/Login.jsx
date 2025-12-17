// Componente simple de Login
// Recibe props del componente padre (en este caso, la función handleLogin)
function Login(props) {
  // Objeto con datos del usuario predefinidos
  // En una aplicación real, estos datos vendrían de un formulario
  const user = {
    username: "Adrián",
    email: "adrian@email.com",
  };

  // Función que se ejecuta al hacer clic en el botón
  // Llama a la función handleLogin que viene de props, pasándole los datos del usuario
  const handleClick = () => {
    props.handleLogin(user);
  };

  // Renderizamos la sección de login con un botón
  return (
    <section>
      <h2>Login section</h2>
      {/* onClick ejecuta handleClick cuando se hace clic en el botón */}
      <button onClick={handleClick}>Login</button>
    </section>
  );
}

// Exportamos el componente
export default Login;
