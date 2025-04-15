import { useState } from "react";

function Card() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null); // null | true | false

  const emailValidationRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleClick = (e) => {
    e.preventDefault(); // prevent form from reloading the page
    if (emailValidationRegex.test(email)) {
      console.log("Email is verified");
      setIsValid(true);
    } else {
      console.log("Email is not verified");
      setIsValid(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="card-container">
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <div className="card-col-2">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </form>

          <div className="card-btn-container">
            <button className="card-button" onClick={handleClick}>
              Get Started
            </button>
          </div>
        </div>

        {isValid === false && (
          <p style={{ color: "white" }}>Invalid email address ❌</p>
        )}
        {isValid === true && (
          <p style={{ color: "white" }}>Email is valid ✅</p>
        )}
      </div>
    </section>
  );
}

export default Card;
