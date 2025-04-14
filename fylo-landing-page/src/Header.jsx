function Header() {
  return (
    <header className="header-container">
      <div className="header-col-1">
        <img src="./illustration-intro.png" alt="Illustration Image" />
      </div>
      <div className="header-col-2">
        <div className="header-pattern"></div>
        <div className="header-sub">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <div className="btn-container">
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
