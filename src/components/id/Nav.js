import React from "react";
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

// import navigation data
import { navigationData } from "../../dataEn";

const Nav = () => {
  const [code, setCode] = React.useState("ID");
  const navigate = useNavigate();
  const navigateBySelect = () => {
    const select = document.getElementById("countries");
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
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
        <div>
          <ReactCountryFlag countryCode={code} svg />
          <select
            id="countries"
            class="h5 text-primary font-semibold bg-transparent border-none"
            onChange={navigateBySelect}
          >
            <option value="id">ID</option>
            <option value="en">EN</option>
          </select>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
