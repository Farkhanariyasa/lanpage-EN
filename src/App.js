import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/en/Hero";
import About from "./components/en/About";
import Features from "./components/en/Features";
import Testimonials from "./components/en/Testimonials";
import Footer from "./components/en/Footer";
import Pricing from "./components/en/Pricing";
import FAQ from "./components/en/FAQ";

const AppEn = () => {
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
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default AppEn;
