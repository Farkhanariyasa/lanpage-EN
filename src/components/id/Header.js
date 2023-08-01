import React, { useState } from "react";

// import components
import Logo from "../../assets/img/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className="mb-12 lg:mb-0 z-20 bg-[#ffffff]/95 w-full h-[100px] py-4  px-4 lg:px-0 fixed top-0 left-0 right-0"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            {/* logo */}
            <a href="#">
              <img src={Logo} alt="" width={35} />
            </a>

            {/* nav / initially hidden / show on large screens  */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? "max-h-[750px]" : "max-h-0"
            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile mobile={setNavMobile}/>
          </div>

          <button
            className="btn btn-quaternary flex items-center gap-x-[5px] xl:gap-x-[20px] group"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20Tanya",
                "_blank"
              );
            }}
          >
            <FaWhatsapp className="text-2xl text-accent-primary_hover group-hover:text-white transition" />
            Hubungi Kami
            <BsArrowRight className="text-2xl text-accent-primary_hover group-hover:text-white transition" />
          </button>

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="text-2xl text-primary cursor-pointer lg:hidden"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
