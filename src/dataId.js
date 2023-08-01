// import icons
import { FaYoutube, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about-svg.svg";
import Feature1Img from "../src/assets/img/features/feature1_svg.svg";
import Feature2Img from "../src/assets/img/features/feature2_svg.svg";
import Feature3Img from "../src/assets/img/features/feature3_svg.svg";
import Feature4Img from "../src/assets/img/features/feature4_svg.svg";
import Feature5Img from "../src/assets/img/features/feature5_svg.svg";
import Feature6Img from "../src/assets/img/features/feature6_svg.svg";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/hero.svg";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

export const navigationData = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Why Us?",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export const heroData = {
  title: `Bring Statistic to Your Language`,
  subtitle:
    "Firstat menyediakan layanan olah data statistik yang cepat dan berkualitas! Tim konsultan kami terdiri dari lulusan Statistika dari Universitas di dalam dan luar negeri yang sudah berpengalaman di industri ini lebih dari 13 tahun. ",
  btnText: "Get in touch",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle1:
    'Firstat adalah perusahaan yang bergerak di bidang layanan jasa statistik. Kami menyediakan jasa berkaitan dengan statistik untuk para akademika maupun non-akademika di seluruh dunia. Kami menawarkan bantuan untuk semua kebutuhan analisis kamu, mulai dari penyusunan kerangka penelitian hingga penyusunan laporan dan persiapan presentasi. Terlepas dari fakta bahwa statistik adalah hal yang sangat rumit, misi kami adalah untuk “Membahasakan statistik dengan cara yang mudah dipahami"',
  subtitle2:
    "Firstat berasal dari kata “FIRST” dan “STATISTICS”. Hal ini menunjukkan misi kami untuk menjadi “Leading Company” di bidang industri statistik. Prinsip perusahaan kami adalah “We commit to deliver a fast and high-quality service because our clients DESERVE only THE BEST!”. Kami berkomitmen untuk memberikan layanan yang cepat dan berkualitas karena menurut kami, klien hanya berhak mendapatkan yang terbaik. ",
  subtitle3:
    "Kami merintis perusahaan ini sejak 2010. Kami mengembangkan brand ini berkali-kali hingga akhirnya kami memutuskan untuk menciptakan label baru untuk bisnis ini di era pasca-pandemi.",
  subtitle4:
    "Tim kami terdiri dari statisticians, data scientists, dan data engineers yang telah bekerja di bidangnya selama lebih dari 13 tahun. Kami memiliki pengalaman dalam menangani berbagai metode statistik seperti eksplorasi data, pengujian hipotesis, regresi linier, korelasi, repeated measure ANOVA, metode campuran, analisis faktor, analisis non-parametrik, Structural Equation Model (SEM), Partial Least Square (PLS) , dll.",
};

export const featuresData = {
  title: "Kenapa harus kami? ",
  subtitle:
    "Dari jutaan layanan statistik di luar sana, kenapa sih kamu harus memilih firstat?",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "TRUSTED",
      description:
        "Kami sudah melayani ratusan klien dalam mengerjakan skripsi, tesis, maupun disertasi dari berbagai negara seperti Indonesia, Malaysia, Australia, Belanda, dan Amerika Serikat.",
      delay: "50",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "HIGH-QUALITY CONSULTANTS",
      description:
        "Tim konsultan kami dipimpin oleh lulusan statistik dari Amerika Serikat dengan pengalaman lebih dari 10 tahun.",
      delay: "75",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "UNDERSTANDABLE EXPLANATION",
      description:
        "Kami menjelaskan statistika dengan bahasa yang simpel dan mudah dimengerti",
      delay: "100",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "FAST and ACCURATE",
      description:
        "Kami bekerja dengan cepat dan akurat karena bagi kami kepuasan klien itu nomor satu.",
      delay: "125",
    },
    {
      image: Feature5Img,
      bgImage: Feature4BgImg,
      title: "WORTH THE MONEY ",
      description: "Free: konsultasi, interpretasi, dan revisi.",
      delay: "150",
    },
    {
      image: Feature6Img,
      bgImage: Feature4BgImg,
      title: "BILINGUAL SERVICE",
      description:
        "Penjelasan dan tulisan bisa dalam bahasa Indonesia dan Inggris.",
      delay: "175",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar3Img,
    name: "Sai",
    web: "Harvard University ",
    message:
      "The teacher is patient, talented and a subject matter expert. She is a kind and charming tutor and provides clear explanations on any questions raised. I highly recommended their service.",
    delay: "900",
  },
  {
    image: Avatar3Img,
    name: "Chelsea ",
    web: "University of Groningen",
    message:
      "The teacher is an excellent teacher. She is very helpful and also flexible, which is a very good quality as a tutor. I had a great time during our session! She also makes the session feel welcoming and pleasurable. ",
    delay: "900",
  },
  {
    image: Avatar2Img,
    name: "Ichal ",
    web: "University of South Florida ",
    message:
      "Tutor has a deep understanding of statistics and she is able to explain it in an easy-to-understand language to a person without prior extensive experience in stats!",
    delay: "600",
  },
  {
    image: Avatar1Img,
    name: "Irene",
    web: "Universitas Tarumanegara",
    message:
      "Dapat diajak berdiskusi dengan baik.. konsultannya benar2 menguasai dan cara menjelaskannya mudah dipahami.. membuatku jadi makin paham olah data dengan aplikasi MPLUS!",
    delay: "300",
  },

  {
    image: Avatar3Img,
    name: "Ina",
    web: "Universitas Gadjah Mada",
    message:
      "Five star experience! It was such a great pleasure to have a tutor at Firstat. Karena benar-benar mengajari, membimbing klien untuk mencoba dahulu dan jikalau stuck akan dibantu untuk dicari solusinya dan tidak melakukan manipulasi data apapun. Jadi serasa punya dosen pembimbing bayangan hehe",
    delay: "900",
  },
  {
    image: Avatar3Img,
    name: "Icut",
    web: "RS Premier Bintaro",
    message:
      "Penjelasan cepat tetapi sederhana dan mudah dimengerti. Diberikan arahan mengenal penggunaan uji statistik yg tepat dan ada garansi nya loooh, memuaskan pokoknya",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "Central Jakarta, Indonesia 10430",
  email: " info@firstat.id",
  phone: "+62811908400",
  list1: [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "Why Us?",
      href: "#features",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ],
  list2: [
    {
      name: "Privacy Policy",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/firstat.id/",
    },
  ],
};

export const copyrightData = {
  text: "© Firstat, 2023. All rights reserved.",
};
