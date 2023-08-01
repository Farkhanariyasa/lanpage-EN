import React from 'react';

// import testimonials data
import { testimonialsData } from '../../dataId';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../slider.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      // centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      spaceBetween={20}
      
      className='mySwiper justify-center w-full rounded-xl'
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web, delay } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='bg-white rounded-[20px] border border-primary max-w-[320px] xl:max-w-[525px] max-h-[370px] pt-[12px] xl:pt-[70px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
          >
            <div>
              <div className='text-lg text-primary font-bold'>{name}</div>
              <div className='mb-4 font-semibold text-accent-primary_hover'>
                {web}
              </div>
              <p className='overflow-scroll xl:overflow-auto'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
