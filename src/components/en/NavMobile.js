import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

// import navigation data
import { navigationData } from "../../dataEn";

const NavMobile = (props) => {
  const [code, setCode] = React.useState("GB");
  // const navigate = useNavigate();
  const navigateBySelect = () => {
    const select = document.getElementById("countriesMobile");
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "id") {
      setCode("ID");
      window.location.replace("/id");
    } else if (selectedValue === "en") {
      setCode("GB");
      alert("EN");
      window.location.replace("/en");
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
          <option value="en">EN</option>
          <option value="id">ID</option>
        </select>
      </div>
    </ul>
  );
};

export default NavMobile;
