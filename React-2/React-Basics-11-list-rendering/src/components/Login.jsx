function Login(props) {
  const user = {
    username: "Adrián",
    email: "adrian@email.com",
  };

  const handleClick = () => {
    props.handleLogin(user);
  };

  return (
    <section>
      <h2>Login section</h2>
      <button onClick={handleClick}>Login</button>
    </section>
  );
}

export default Login;
