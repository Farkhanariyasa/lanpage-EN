import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='overflow-hidden'>
      <div className='mx-auto'>
        <div
          className='bg-accent-primary_hover min-h-[600px] px-11 py-11'
          data-aos='fade-up'
          data-aos-offset='300'
        >
          <div className='flex flex-col justify-center xl:px-0 h-[550px]'>
            <h2 className='h2 text-white text-center mb-[80px]'>
              Testimonials
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
