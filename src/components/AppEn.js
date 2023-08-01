import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./en/Hero";
import About from "./en/About";
import Features from "./en/Features";
import Testimonials from "./en/Testimonials";
import Footer from "./en/Footer";
import Pricing from "./en/Pricing";
import FAQ from "./en/FAQ";

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
