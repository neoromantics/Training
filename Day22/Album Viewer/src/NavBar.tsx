import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        Logo
      </a>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
