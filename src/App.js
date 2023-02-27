import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta">
        <CtaSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
      {/* <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer /> */}
    </div>
  );
};

export default App;
