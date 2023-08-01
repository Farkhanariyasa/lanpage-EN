import React from 'react';

// import copyright data
import { copyrightData } from '../../dataId';

const Copyright = () => {
  // destructure copyright data
  const { text, icon } = copyrightData;
  return (
    <section className='mt-24 pb-12' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center md:text-left  lg:flex-row justify-center gap-y-8'>
          {/* text */}
          <div className='text-sm font-light italic max-w-[360px]'>{text}</div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
