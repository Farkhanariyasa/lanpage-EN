import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./id/Hero";
import About from "./id/About";
import Features from "./id/Features";
import Testimonials from "./id/Testimonials";
import Footer from "./id/Footer";
import Pricing from "./id/Pricing";
import FAQ from "./id/FAQ";

const AppId = () => {
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

export default AppId;
