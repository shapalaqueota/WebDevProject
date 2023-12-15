import React from "react";
import gitsvg from "./icons/github.svg";
import linksvg from "./icons/linked.svg";
import tgsvg from "./icons/tgm.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icon-links">
        <a href="https://github.com/shapalaqueota">
          <img src={gitsvg} alt="Иконка 1" />
        </a>
        <a href="https://t.me/shapalaqueota">
          <img src={tgsvg} alt="Иконка 2" />
        </a>
        <a href="https://www.linkedin.com/in/azamat-smagzanov-a12311227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <img src={linksvg} alt="Иконка 3" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
