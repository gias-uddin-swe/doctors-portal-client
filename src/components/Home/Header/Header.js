import React from "react";
import "./Header.css";
import HeaderMain from "../HeaderMain/HeaderMain";
import BusinessInfo from "./../BusinessInfo/BusinessInfo";
import Menubar from "../../Sheared/Menubar/Menubar";

const Header = () => {
  return (
    <div className="header-container">
      <Menubar></Menubar>
      <HeaderMain></HeaderMain>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Header;
