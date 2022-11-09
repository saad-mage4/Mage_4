import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Asset-1-1.png";
import "./style/Header.scss";
const Header = ({ menu, title }) => {
  const menuLinks = menu.map((link, index) => (
    <li key={index}>
      <Link to={link.url} className="Links">
        {link.title}
      </Link>
    </li>
  ));

  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <h3>{title}</h3>
        <ul>{menuLinks}</ul>
      </header>
    </>
  );
};

export default Header;
