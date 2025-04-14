function Card() {
  return (
    <section>
      <div className="card-container">
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="card-col-2">
          <form action="form">
            <input type="email" id="email" />
          </form>
          <div className="card-btn-container">
            <button className="card-button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
