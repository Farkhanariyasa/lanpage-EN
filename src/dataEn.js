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
    "Firstat provides fast and high-quality statistical data analysis services! Our consultant team consists of Statistics graduates from globally reputable universities who have more than 13 years of experience in this industry. ",
  btnText: "Get in touch",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle1:
    'Firstat is a company engaged in the field of statistical services. We provide statistics-related services to academics and non-scholars worldwide. We offer assistance for all your analytical needs, from developing research frameworks to preparing reports and preparing presentations. Despite the fact that statistics is a very complicated thing, our mission is to "Talking statistics in an easy-to-understand way"',
  subtitle2:
    'Firstat comes from the words "FIRST" and "STATISTICS". This shows our mission to be a "Leading Company" in the statistics industry. Our company principle is "We are committed to providing fast and high-quality service because our clients deserve only the BEST!". We are committed to providing fast and quality service because in our opinion, clients only deserve the best.',
  subtitle3:
    "We started this company in 2010. We developed this brand many times until we finally decided to create a new label for this business in the post-pandemic era.",
  subtitle4:
    "Our team consists of statisticians, data scientists and data engineers who have worked in their fields for over 13 years. We have experience in dealing with various statistical methods such as data exploration, hypothesis testing, linear regression, correlation, repeated measures ANOVA, mixed methods, factor analysis, non-parametric analysis, Structural Equation Model (SEM), Partial Least Square (PLS), etc. . .",
};

export const featuresData = {
  title: "Why should we?",
  subtitle:
    "Of the millions of statistical services out there, why should you choose Firstat?",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "TRUSTED",
      description:
        "We have served hundreds of clients working on theses and dissertations from various countries such as Australia, the Netherlands, the United States, Indonesia, and Malaysia.",
      delay: "50",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "HIGH-QUALITY CONSULTANTS",
      description:
        "Our consulting team is led by a statistics graduate from the United States with over 10 years of experience.",
      delay: "75",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "SEAMLESSLY UNDERSTANDABLE EXPLANATION",
      description:
        "We explain statistics in a simple language which makes it easy to understand",
      delay: "100",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "FAST and ACCURATE",
      description:
        "We serve our clients as quickly and accurately as possible because client satisfaction is our very first priority.",
      delay: "125",
    },
    {
      image: Feature5Img,
      bgImage: Feature4BgImg,
      title: "WORTH THE MONEY ",
      description:
        "Only for our clients: consultation, interpretation and revision are free.",
      delay: "150",
    },
    {
      image: Feature6Img,
      bgImage: Feature4BgImg,
      title: "BILINGUAL SERVICE",
      description:
        "Apart from English, we also serve the use of Indonesian for your convenience.",
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
      "I can invite tutors to discuss well. They really mastered it and the way they explained it was easy to understand. This makes me understand more about processing data with the MPLUS application!",
    delay: "300",
  },

  {
    image: Avatar3Img,
    name: "Ina",
    web: "Universitas Gadjah Mada",
    message:
      "Five star experience! It's great to have tutors at Firstat. Because it really teaches, guides clients to try it first and if it gets stuck they will be assisted to find a solution and not do any data manipulation. So it's like having a shadow supervisor hahaha.",
    delay: "900",
  },
  {
    image: Avatar3Img,
    name: "Icut",
    web: "RS Premier Bintaro",
    message:
      "The explanations are quick but simple and easy to understand. The guidance was given regarding the use of appropriate statistical tests and there was a guarantee too, satisfying!",
    delay: "900",
  },
  {
    image: Avatar3Img,
    name: "Dian",
    web: "University of Nebraska-Lincoln",
    message:
      "The services we received were very satisfying, both in terms of analysis quality and turnaround time. We plan to continue using the statistical services offered, especially related to processing lab test data in the infrastructure and other civil engineering fields.",
    delay: "300",
  },
  {
    image: Avatar3Img,
    name: "Mukhlis",
    web: "Universitas Padjadjaran",
    message:
      "Statistical processing with Firstat can make me not only get the result but also understand the process being carried out, so that during my theses defense, I knew the basic reasons for statistical calculations. They are also very open to discussion and work together to achieve research objectives.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Grace",
    web: "Universitas Padjadjaran",
    message:
      "The consultant is excellent! They provided more than what I asked for. They provided solutions/suggestions in times of confusion and they are able to work quickly. Thank you so much!",
    delay: "900",
  },
  {
    image: Avatar3Img,
    name: "Insan",
    web: "Vrije Universiteit Amsterdam",
    message:
      "The consultant really understands the topic being consulted. The consulting process is efficient and effective and focuses on solutions. They are also quick to respond to questions via WhatsApp.",
    delay: "1200",
  },
  {
    image: Avatar3Img,
    name: "Wildan",
    web: "Purdue University",
    message:
      "The teacher is a great companion to learning Statistics from scratch. She knows the best way to help you understand Statistics. I highly recommend her services to everyone who wants to learn Statistics.",
    delay: "1500",
  },
  {
    image: Avatar3Img,
    name: "Willy",
    web: "University of Groningen",
    message:
      "Having spent the past few months with them, I've seen firsthand how much they invest in their clients. They poured 100% of their effort into ensuring that each concept was clear, accessible, and comprehensible to me. Without reservation, I would highly recommend their service!",
    delay: "1800",
  }
  
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
