import React from "react";
import FooterNav from "./footerNav";
import UtilityComponent from "./utilityFooterComponet";

const Footer = (props) => {
  const customFooterStyle = {
    zIndex: "10",
  };
  return (
    <div
      className="m-auto d-flex align-items-center justify-content-center d-md-none"
      style={customFooterStyle}
    >
      <UtilityComponent tags={props.utilityTags}/>
      <footer className="shadow-lg d-flex align-items-center justify-content-center footer-nav-container">
        <FooterNav />
      </footer>
    </div>
  );
};

export default Footer;
