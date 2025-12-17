// Componente de formulario de Login
// Recibe props del componente padre (en este caso, handleLogin)
function Login(props) {
  // Objeto que almacena los datos del usuario
  // Se actualiza conforme el usuario escribe en los inputs
  const user = {
    username: "",
    email: "",
  };

  // Función que se ejecuta cuando se envía el formulario (submit)
  const handleSubmit = (e) => {
    // e.preventDefault() evita que la página se recargue (comportamiento por defecto de los formularios)
    e.preventDefault();
    // Llamamos a la función handleLogin que viene de props, pasándole los datos del usuario
    props.handleLogin(user);
  };

  // MÉTODO ANTIGUO (comentado): función específica para actualizar solo el username
  // Este enfoque no es escalable si tenemos muchos campos
  // const setUsername = (e) => {
  //   user.username = e.target.value;
  // };

  // Función genérica para actualizar cualquier campo del objeto user
  // 'e' es el evento que contiene la información del input
  // 'field' es el nombre del campo que queremos actualizar ("username" o "email")
  const setUserField = (e, field) => {
    // user[field] accede dinámicamente a la propiedad del objeto
    // e.target.value obtiene el valor actual del input
    user[field] = e.target.value;
  };

  // Retornamos el JSX del formulario
  return (
    <section>
      <h2>Login section</h2>

      {/* onSubmit se ejecuta cuando se envía el formulario (al hacer clic en el botón o presionar Enter) */}
      <form onSubmit={handleSubmit}>
        {/* fieldset agrupa elementos relacionados del formulario */}
        <fieldset>
          {/* htmlFor conecta el label con el input mediante el id */}
          <label htmlFor="username">Username:</label>
          {/* onChange se ejecuta cada vez que el usuario escribe en el input */}
          {/* (e) => setUserField(e, "username") es una función anónima que pasa el evento y el nombre del campo */}
          <input
            type="text"
            id="username"
            onChange={(e) => setUserField(e, "username")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setUserField(e, "email")}
          />
        </fieldset>
        {/* Al hacer clic en este botón, se ejecuta handleSubmit */}
        <button>Login</button>
      </form>
    </section>
  );
}

// Exportamos el componente
export default Login;
