import React, { useState } from "react";
import PricingKonsultasi from "./PricingKonsultasi";
import PricingTutor from "./PricingTutor";

const Pricing = () => {
  const [isTutor, setIsTutor] = useState("konsultasi");

  const konsultasiHandler = () => {
    setIsTutor("konsultasi");
  };

  const tutorHandler = () => {
    setIsTutor("tutor");
  };

  return (
    <div data-aos="fade-down" data-aos-delay="200">
      <div className=" pb-28  xl:mb-[150px] min-h-[1100px] ">
        <div class="lg:h-[767px]">
          <div class="max-w-7xl min-h-screen mx-auto p-4 sm:p-10 lg:py-20">
            <div class="max-w-5xl flex-col justify-center items-center text-center mx-auto bg  text-white tracking-widest pb-10 lg:pb-20">
              <h1 class="h2 mb-6 xl:mb-12">
                Find the best solution for you !
              </h1>
              <p class="lead text-center ">
                Beda orang beda kebutuhan, Apapun kebutuhan kamu, selalu ada solusi yang tepat untukmu. 
              </p>
            </div>
            <div class="max-w-xl text-center mx-auto bg  text-white tracking-widest pb-10 lg:pb-20">
              <ul class=" text-sm font-medium text-center text-gray-500 divide-x flex divide-gray-200 rounded-lg shadow xl:blok">
                <li class="w-full">
                  <button
                    onClick={konsultasiHandler}
                    class="inline-block w-full p-4 bg-white hover:text-gray-700  rounded-l-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    Konsultasi Statistik
                  </button>
                </li>
                <li class="w-full">
                  <button
                    onClick={tutorHandler}
                    class="inline-block w-full p-4 bg-white hover:text-gray-700  rounded-r-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    Tutor Statistik
                  </button>
                </li>
              </ul>
            </div>
            {isTutor === "konsultasi" ? (
              <PricingKonsultasi />
            ) : (
              <PricingTutor />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
