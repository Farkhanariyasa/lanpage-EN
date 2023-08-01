import React from "react";

const PricingTutor = () => {
  return (
    <div className="flex gap-x-[20px] xl:flex-row flex-col gap-y-5">
      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform xl:hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-[32px] text-center">Basic</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Free </span>Rp0.00
        </h1>
        <p className="text-center mt-[40px] mb-[75px]">
          Paket ini cocok untuk kamu yang mau kenalan dulu sama kami dan pengen
          share permasalahan yang dihadapi di penelitian/skripsi/tesis/disertasi
          kamu
        </p>
        <ul class="text-start list-disc pl-6">
          <li>
            <div class="font-semibold mb-32">Free 15 menit meeting</div>
          </li>
        </ul>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-12 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Basic",
                "_blank"
              );
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-[32px] text-center">Ordinary</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Start </span>
          Rp499.000
        </h1>
        <p className="text-center mt-[40px] mb-[75px]">
          Paket ini cocok untuk kamu yang cuma perlu diolahin datanya, dijelasin
          cara mengerjakannya saja.
        </p>
       <ul class="text-start list-disc pl-6">
          <li>
            <div class="font-semibold">Running Data</div>
          </li>
          <li>
            <div class="font-semibold">Gratis Interpretasi</div>
          </li>
          <li>
            <div class="font-semibold">
              Materi Metode Statistik yang digunakan
            </div>
          </li>
          <li>
            <div class="font-semibold mb-20">Free 2x meeting</div>
          </li>

        </ul>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-12  w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Ordinary",
                "_blank"
              );
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-[32px] text-center">Extraordinary</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Start </span>
          Rp599.000
        </h1>
        <p className="text-center mt-[40px] mb-[75px]">
          Paket ini cocok untuk kamu yang perlu diolahin datanya, dijelasin cara
          mengerjakannya, plus dibantu menuliskan hasil dan pembahasannya.
        </p>
       <ul class="text-start list-disc pl-6">
          <li>
            <div class="font-semibold">Running Data</div>
          </li>
          <li>
            <div class="font-semibold">Gratis Interpretasi</div>
          </li>
          <li>
            <div class="font-semibold">
              Materi Metode Statistik yang digunakan
            </div>
          </li>
          <li>
            <div class="font-semibold">Free 2x meeting</div>
          </li>
          <li>
            <div class="font-semibold mb-7">Free 2x revisi minor</div>
          </li>
        </ul>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-12 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Extraordinary",
                "_blank"
              );
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-4">
        <h2 className="h2 text-[32px] mt-3 text-center">Meeting Only</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Only </span>Rp350.000
        </h1>
        <div class="p-4">
          <p class="font-bold">Paket ini cocok untuk kamu yang:</p>
          <ul class="list-disc pl-6">
            <li>
              Udah ngolah sendiri data tapi bingung cara baca output dari
              program
            </li>
            <li>
              Udah ngolah dan interpretasi sendiri tapi gak yakin apakah proses
              yang udah dilakukan sudah benar atau belum
            </li>
            <li>Belum tau sama sekali mau ngolah data apa</li>
          </ul>
          <ul class="text-center mt-4">
            <li>
              <div class="font-semibold">1x meeting (2 jam)</div>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 mt-9 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Extraordinary",
                "_blank"
              );
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTutor;
