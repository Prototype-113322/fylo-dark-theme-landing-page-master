import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import ProductiveSection from "./Productive-section";
import Testimonials from "./Testimonials";
import Card from "./Card";

function Wrapper() {
  return (
    <main className="wrapper-desktop">
      <section className="sub-wrapper">
        <Navbar></Navbar>
        <Header></Header>
        <Features></Features>
        <ProductiveSection></ProductiveSection>
        <Testimonials></Testimonials>
        <Card></Card>
      </section>
    </main>
  );
}

export default Wrapper;
