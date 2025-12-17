// Componente de formulario de Login
// Recibe props del componente padre (handleLogin)
function Login(props) {
  // Objeto que almacena los datos del usuario
  const user = {
    username: "",
    email: "",
  };

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();
    // Llama a la función handleLogin que viene de props, pasándole los datos del usuario
    props.handleLogin(user);
  };

  // MÉTODO ANTIGUO (comentado): función específica para el username
  // const setUsername = (e) => {
  //   user.username = e.target.value;
  // };

  // Función genérica para actualizar cualquier campo del usuario
  // 'e' es el evento que contiene el valor del input
  // 'field' es el nombre del campo a actualizar ("username" o "email")
  const setUserField = (e, field) => {
    // Actualiza dinámicamente el campo del objeto user
    // user[field] accede a la propiedad usando el nombre en la variable field
    user[field] = e.target.value;
  };

  // Retornamos el JSX del formulario
  return (
    <section>
      <h2>Login section</h2>

      {/* onSubmit se ejecuta cuando se envía el formulario */}
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre de usuario */}
        <fieldset>
          <label htmlFor="username">Username:</label>
          {/* onChange se ejecuta cada vez que el usuario escribe en el input */}
          <input
            type="text"
            id="username"
            onChange={(e) => setUserField(e, "username")}
          />
        </fieldset>
        {/* Campo para el email */}
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setUserField(e, "email")}
          />
        </fieldset>
        {/* Botón para enviar el formulario */}
        <button>Login</button>
      </form>
    </section>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Login;
