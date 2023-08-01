import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

// import navigation data
import { navigationData } from "../../dataEn";

const NavMobile = (props) => {
  const [code, setCode] = React.useState("ID");
  const navigate = useNavigate();
  const navigateBySelect = () => {
    const select = document.getElementById("countriesMobile");
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "id") {
      setCode("ID");
      navigate("/id");
    } else if (selectedValue === "en") {
      setCode("GB");
      navigate("/en");
    }
  };
  return (
    <ul className="flex flex-col px-6 py-8 h-full gap-y-4 bg-primary">
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a
              className="text-white"
              href={item.href}
              onClick={() => props.mobile(false)}
            >
              {item.name}
            </a>
          </li>
        );
      })}
      <div>
        <ReactCountryFlag countryCode={code} svg />
        <select
          id="countriesMobile"
          class="h5 text-white font-semibold bg-primary border-none"
          onChange={navigateBySelect}
        >
          <option value="id">ID</option>
          <option value="en">EN</option>
        </select>
      </div>
    </ul>
  );
};

export default NavMobile;
