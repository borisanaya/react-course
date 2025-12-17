// Componente Login (HIJO)
// Este componente enviará datos AL PADRE cuando el usuario haga clic
function Login(props) {
  // Objeto con información del usuario
  // En una app real, esto vendría de un formulario o una API
  const user = {
    username: "Adrián",
    email: "adrian@email.com",
  };

  // Función que se ejecuta cuando el usuario hace clic en el botón
  const handleClick = () => {
    // COMUNICACIÓN HIJO -> PADRE:
    // Llamamos a la función que recibimos del padre a través de props
    // Le pasamos el objeto 'user' como argumento
    // Esto actualizará el estado en el componente padre (App)
    props.handleLogin(user);
  };

  return (
    <section>
      <h2>Login section</h2>
      {/* 
        Cuando se hace clic en este botón:
        1. Se ejecuta handleClick
        2. handleClick llama a props.handleLogin(user)
        3. Esto ejecuta la función 'login' del padre
        4. El padre actualiza su estado con la info del usuario
      */}
      <button onClick={handleClick}>Login</button>
    </section>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Login;
