import React from "react";

// import about data
import { aboutData } from "../../dataEn";

const About = () => {
  // destructure about
  const { image, title, subtitle1, subtitle2, subtitle3, subtitle4 } =
    aboutData;
  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div className="container mx-auto">
        <div className="bg-white border-4 border-primary rounded-[50px] min-h-[560px] px-12 pb-2 flex flex-col text-center  xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:p-16">
          {/* image */}
          {/* <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="" />
          </div> */}
          {/* text */}
          <div className="flex-1 xl:pr-12">
            <h2 className="h2 mb-10 text-center" >
              {title}
            </h2>
            <div
              className="h4 text-justify  mx-auto xl:mx-0"
            >
              <p className="mt-4 indent-12 ">{subtitle1}</p>
              <p className="mt-4 indent-12 ">{subtitle2}</p>
              <p className="mt-4 indent-12 ">{subtitle3}</p>
              <p className="mt-4 indent-12 ">{subtitle4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
