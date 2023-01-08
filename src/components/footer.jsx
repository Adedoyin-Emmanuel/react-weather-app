import React from "react";
import FooterNav from "./footerNav";
import UtilityComponent from "./utilityFooterComponet";


const Footer = () =>{
    return (

        <div className = "m-auto d-flex align-items-center justify-content-center d-md-none">

        <UtilityComponent/>
        <footer className="d-flex align-items-center justify-content-center footer-nav-container">
            <FooterNav/>
        </footer>

        </div>
    )
}

export default Footer;