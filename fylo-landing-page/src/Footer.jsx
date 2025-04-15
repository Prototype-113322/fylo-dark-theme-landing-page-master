function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo-container">
        <img src="./logo.svg" alt="Fylo Logo" />
      </div>
      {/* <!-- footer-social-col-1 --> */}
      <section className="footer-tablet footer-desktop">
        <section>
          <div className="footer-col">
            <div className="social-icon">
              <img src="./icon-location.svg" alt="Location" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, minima?
              </p>
            </div>
          </div>
          {/* <!-- footer-social-col-2 --> */}
          <div className="footer-col">
            <div className="social-icon">
              <img src="./icon-phone.svg" alt="Location" />
            </div>
            <div>
              <p>+1-543-123-4567</p>
            </div>
          </div>
          {/* <!-- footer-social-col-3 --> */}
          <div className="footer-col">
            <div className="social-icon">
              <img src="./icon-email.svg" alt="Location" />
            </div>
            <div>
              <p>example@fylo.com</p>
            </div>
          </div>
        </section>

        {/* <!-- Footer Links --> */}
        <section className="footer-link-container">
          <div className="footer-link-col-1">
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-link-col-2">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
