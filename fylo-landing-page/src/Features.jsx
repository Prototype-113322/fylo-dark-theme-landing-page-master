function Features() {
  return (
    <section className="feature-container">
      {/* Feature 1 */}
      <div className="feature-sub-container">
        <div className="feature-col-1">
          <div className="img-container">
            <img src="./icon-access-anywhere.svg" alt="Digital Devices" />
          </div>
        </div>
        <div className="feature-col-2">
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="feature-sub-container">
        <div className="feature-col-1">
          <div className="img-container">
            <img src="./icon-security.svg" alt="Security Icon" />
          </div>
        </div>
        <div className="feature-col-2">
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="feature-sub-container">
        <div className="feature-col-1">
          <div className="img-container">
            <img src="./icon-collaboration.svg" alt="Collaboration Icon" />
          </div>
        </div>
        <div className="feature-col-2">
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with your friend, family and
            relatives for live collaboration. No email attachment required
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="feature-sub-container">
        <div className="feature-col-1">
          <div className="img-container">
            <img src="./icon-any-file.svg" alt="File Icon" />
          </div>
        </div>
        <div className="feature-col-2">
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
