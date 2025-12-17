import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <header className="header">
      <h1>Bienvenidos a esta página</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
