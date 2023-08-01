import React from "react";

// import hero data
import { heroData } from "../../dataEn";

// import icons
import { BsArrowRight } from "react-icons/bs";

// import components
import Header from "./Header";
import Review from "./Review";

const Hero = () => {
  // destructure hero
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="lg:h-[900px] py-12 mt-[100px] xl:mt-0">
      <Header />
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
          {/* text */}
          <div className="text-center xl:text-left xl:absolute">
            {/* title */}
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-16"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              {title}
            </h1>
            {/* subtitle */}
            <p
              className="lead xl:max-w-[500px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {subtitle}
            </p>
            {/* <Review /> */}
            {/* <button
              className="btn bg-primary text-base font-bold text-white drop-shadow-primary hover:bg-gray-400 hover:text-primary flex items-center gap-x-[5px] xl:gap-x-[20px] group"
              data-aos="fade-down"
              data-aos-delay="100"
              onClick={() => {
                window.location.replace("https://firstat.id/statguide/");
              }}
            >
              Click for surprise
              <BsArrowRight className="text-2xl text-white group-hover:text-primary transition" />
            </button> */}
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-12 xl:bottom-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={image} alt="" className="w-[400px] pb-32 xl:w-[600px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
