function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-col-1">
        <img src="./logo.svg" alt="Logo" />
      </div>
      <div className="nav-col-2">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
