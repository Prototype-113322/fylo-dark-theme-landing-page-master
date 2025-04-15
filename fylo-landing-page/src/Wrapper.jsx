import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import ProductiveSection from "./Productive-section";
import Testimonials from "./Testimonials";
import Card from "./Card";
import { motion } from "framer-motion";

function Wrapper() {
  return (
    <main className="wrapper-desktop">
      <section className="sub-wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Navbar></Navbar>
          <Header></Header>
          <Features></Features>
          <ProductiveSection></ProductiveSection>
          <Testimonials></Testimonials>
          <Card></Card>
        </motion.div>
      </section>
    </main>
  );
}

export default Wrapper;
