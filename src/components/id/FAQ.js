import React from "react";

const FAQ = () => {
  return (
    <div>
      <div>
        <section class="text-primary">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="h2 mb-6 xl:mb-12">
                Frequently Asked Question
              </h1>
              <p class="lead text-center ">
                Semua pertanyaan yang sering ditanyakan oleh pelanggan kami ada di sini, kalau kamu punya pertanyaan lain, kamu bisa langsung tanya ke kami.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Pengerjaannya berapa hari?
                  </summary>

                  <span>
                    Normally, pengerjaan olah data bisa selesai dalam waktu 2-4
                    hari karena ada antrian. Tapi kalau kamu urgent banget harus
                    kelar besoknya, kita bisa kok siapin paket express buat
                    kamu. Kamu cuma nambah 20% aja dari harga yang sudah
                    disepakati.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Hasil olah datanya beneran akurat?
                  </summary>

                  <span>
                    Pastinya!!! Tim kami dilead oleh statistician lulusan
                    Amerika Serikat yang udah biasa menghadapi klien ga cuma
                    dari Indonesia tapi juga dari luar negeri loh!
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Nanti diajarin nggak cara ngolah datanya?
                  </summary>

                  <span>
                    Bisa donk! Jadi setelah teman-teman mengirimkan datanya,
                    dalam waktu 2-4 hari, teman-teman akan kami ajak meeting
                    untuk kami ajarkan cara pengolahan datanya dari awal sampai
                    bagaimana cara membacanya!
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Kalo hasilnya nggak sesuai harapan gimana?
                  </summary>

                  <span>
                    Kita akan bantu menemukan metode yang tepat sesuai dengan
                    kondisi data kamu. Kami tidak akan memanipulasi data alias
                    ngubah-ngubah data apapun karena kan ga boleh ya… Instead,
                    kami akan bantu mencarikan justifikasi yang bisa kamu pakai
                    buat menghadapi sidang.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Kalo ada revisi gimana? Bayar lagi nggak?
                  </summary>

                  <span>
                    Temen-temen dapat GRATIS revisi minor kok. Kecuali kalau
                    berubah total dari awal (bahkan data dan tujuan
                    penelitiannya ganti), nanti ada charge 50% dari harga yang
                    sudah disepakati.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Firstat bisa melayani aplikasi statistik apa aja?
                  </summary>

                  <span >
                    Kita bisa bantu analisa data kamu dengan program statistik
                    apa aja, mulai dari SPSS, R, Python, SmartPLS, MPlus,
                    EVIEWS, SAS, STATA.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Bisa ketemu offline nggak?
                  </summary>

                  <span >
                    Ooo bisa dong!!! hubungin aja dulu, kalo Tuhan mengizinkan
                    kita bisa ketemu kok di mana pun kamu berada. Soalnya, tim
                    konsultan kami tersebar di berbagai kota di Indonesia.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Cara pemesanannya gimana?
                  </summary>

                  <span >
                    <div class="flex flex-col space-y-4">
                      <p class="text-lg font-medium">
                        Cara Memulai Projek Analisis Data
                      </p>
                      <ol class="list-decimal list-inside space-y-2">
                        <li>
                          Hubungi kontak kami melalui WA, telepon, atau email
                          yang sudah tertera
                        </li>
                        <li>
                          Free konsultasi untuk mengetahui apakah projek kamu
                          memungkinkan untuk kami kerjakan
                        </li>
                        <li>
                          Kamu akan diminta untuk mengirimkan bab 1,2 dan 3 atau
                          setidaknya hipotesis penelitian serta data set
                        </li>
                        <li>Kamu melakukan 50% pembayaran</li>
                        <li>
                          Proses pengerjaan analisis akan memakan waktu selama 1
                          - 3 hari
                        </li>
                        <li>
                          Hasil analisis akan disampaikan atau didiskusikan
                          melalui meeting (online/offline)
                        </li>
                        <li>Kamu melakukan sisa 50% pembayaran</li>
                        <li>
                          Ketika pembayaran sudah diterima, hasil, laporan dan
                          lampiran akan dikirimkan melalui email
                        </li>
                      </ol>
                    </div>
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Metode pembayarannya gimana?
                  </summary>

                  <span >
                    Untuk saat ini kami hanya menggunakan transfer bank untuk
                    metode pembayaran. Kamu boleh bayar 50% dulu di awal ketika
                    kita sudah deal, dan 50% sisanya bisa kamu bayarkan setelah
                    dapat hasilnya.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
