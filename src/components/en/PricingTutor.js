import React from "react";

const PricingTutor = () => {
  return (
    <div className="flex justify-center gap-x-[20px] xl:flex-row flex-col gap-y-5">
      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8">
        <h2 className="h2 text-center">Introvert</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Start From</span>
          US$35
        </h1>
        <div class="p-4 text-center">
          This package is suitable you who want to learn and be tutored
          one-on-one (private). Certainly our tutors are professional,
          experienced, and with various personality types. Want to request a
          tutor who is exciting, calm, or crazy? They are all in our team and
          all you need to do is just to choose!
        </div>
        {/* <ul class="text-start list-disc pl-6 mb-10">
          <li>Mau request yang sesama introvert?</li>
          <li>Mau yang heboh?</li>
          <li> Atau malah yang setengah-setengah?</li>
        </ul>
        <div class="text-center">Ada semua kok di tim kami!</div> */}
        <div class="text-center">
          <button
            class="rounded-2xl h-12  w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Hello%20Admin%20I%20want%20to%20order%20the%20Introvert%20package",
                "_blank"
              );
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-4 pt-8">
        <h2 className="h2 text-center">Ekstrovert</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Start From </span>
          US$25
        </h1>
        {/* <h3 className="h3 text-[16px] mt-3 text-center">
          per orang (min. 3 orang)
        </h3> */}
        <div class="p-4 text-center mb-[8.5rem]">
          If you want to study together with friends. Don't worry, we have all
          professional, experienced and definitely really fun tutors so you can
          understand the material easily. This package is a minimum of 3 people
          in one group!
        </div>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Hello%20Admin%20I%20want%20to%20order%20Extrovert%20package",
                "_blank"
              );
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTutor;
