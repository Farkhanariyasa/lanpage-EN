import React, { useRef, useState } from "react";

// import testimonials data
import { testimonialsData } from "../../dataEn";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../slider.css";

// import required modules
import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper flex justify-center items-center"
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web, delay } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-primary  xl:w-full max-h-[400px] mb-5 shadow-xl p-10 px-16"
          >
            <div>
              <div className="xl:text-4xl md:text-3xl text-primary font-bold">{name}</div>
              <div className="mb-4 xl:text-2xl md:text-xl font-semibold text-accent-primary_hover">
                {web}
              </div>
              <p className="overflow-hidden text-sm max-h-max xl:text-xl xl:overflow-auto">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
