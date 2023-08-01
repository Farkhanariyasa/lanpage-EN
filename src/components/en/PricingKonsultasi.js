import React from "react";

const PricingTutor = () => {
  return (
    <div className="flex gap-x-[20px] xl:flex-row flex-col gap-y-5">
      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform xl:hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-[32px] text-center">Basic</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Only </span>US$10
        </h1>
        <p className="text-center mt-[40px] mb-[100px]">
          This package is suitable for you who want to get to know us first and
          want to share the problems encountered in your
          research/thesis/dissertation
        </p>
        <ul class="text-start list-disc pl-6">
          <li>
            <div class="font-semibold mb-32"> 30 minutes meeting session</div>
          </li>
        </ul>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-12 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Hello%20Admin%20I%20Want%20To%20Order%20The%20Basic%20Package",
                "_blank"
              );
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-[32px] text-center">Ordinary</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Start </span>
          US$50
        </h1>
        <p className="text-center mt-[40px] mb-[98px]">
          Not only process your data, we also will guide you how to do the data
          processing.
        </p>
        <ul class="text-start list-disc pl-6">
          <li>
            <div class="font-semibold">Running Data</div>
          </li>
          <li>
            <div class="font-semibold">Free interpretation</div>
          </li>
          <li>
            <div class="font-semibold">Material Statistical Method used</div>
          </li>
          <li>
            <div class="font-semibold mb-20">Free 2x meetings</div>
          </li>
        </ul>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-12  w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Hello%20Admin%20I%20Want%20To%20Order%20The%20Ordinary%20Package",
                "_blank"
              );
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-[32px] text-center">Extraordinary</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Start </span>
          US$70
        </h1>
        <p className="text-center mt-[40px] mb-[100px]">
          This package is suitable for you who need to process the data, explain
          how to do it, plus help writing down the results and discussion.
        </p>
        <ul class="text-start list-disc pl-6">
          <li>
            <div class="font-semibold">Running Data</div>
          </li>
          <li>
            <div class="font-semibold">Free interpretation</div>
          </li>
          <li>
            <div class="font-semibold">Material Statistical Method used</div>
          </li>
          <li>
            <div class="font-semibold">Free 2x meetings</div>
          </li>
          <li>
            <div class="font-semibold mb-7">Free 2x minor revisions</div>
          </li>
        </ul>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-12 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Hello%20Admin%20I%20Want%20To%20Order%20The%20Extra%20ordinary%20Package",
                "_blank"
              );
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-4">
        <h2 className="h2 text-[32px] mt-3 text-center">Meeting Only</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Only </span>US$35
        </h1>
        <div class="p-4">
          <p class="font-bold">This package is suitable for you, who:</p>
          <ul class="list-disc pl-6">
            <li>
              Have processed the data by yourself but confused about how to read
              the output from the program
            </li>
            <li>
              Have processed and interpreted it by yourself but not sure whether
              the process that has been done is correct or not
            </li>
            <li>Do not know what data to process at all</li>
          </ul>
          <ul class="text-center mt-4">
            <li>
              <div class="font-semibold">This include 1x meeting (2 hours)</div>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-8 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Hello%20Admin%20I%20Want%20To%20Order%20The%20Meeting%20Only%20Pack",
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
