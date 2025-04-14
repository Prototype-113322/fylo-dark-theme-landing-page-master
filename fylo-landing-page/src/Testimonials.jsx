function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="comment-img-container">
        <img src="./bg-quotes.png" alt="" />
      </div>
      <div className="testimonial-container">
        {/* <!-- Testimonial 1 --> */}
        <section className="testimonial-sub-container">
          <div className="testimonial-col-1">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="testimonial-col-2">
            <div className="user-profile-container">
              <img src="./profile-1.jpg" />
            </div>
            <div className="user-name">
              <h4>Satish Patel</h4>
              <p>Founder & Co-Creator</p>
            </div>
          </div>
        </section>
        {/* <!-- Testimonial 2 --> */}
        <section className="testimonial-sub-container">
          <div className="testimonial-col-1">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="testimonial-col-2">
            <div className="user-profile-container">
              <img src="./profile-2.jpg" />
            </div>
            <div className="user-name">
              <h4>Bruce Kennedy</h4>
              <p>Founder & Co-Creator</p>
            </div>
          </div>
        </section>
        {/* <!-- Testimonial 3 --> */}
        <section className="testimonial-sub-container">
          <div className="testimonial-col-1">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="testimonial-col-2">
            <div className="user-profile-container">
              <img src="./profile-3.jpg" />
            </div>
            <div className="user-name">
              <h4>Iva Boyd</h4>
              <p>Founder & Co-Creator</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Testimonials;
