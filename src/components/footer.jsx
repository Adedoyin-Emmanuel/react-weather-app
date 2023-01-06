import React from "react";
import FooterNav from "./footerNav";
import UtilityComponent from "./utilityFooterComponet";


const Footer = () =>{
    return (
    <React.Fragment>
        <UtilityComponent/>
        <footer className="container-fluid footer-nav-container">
            <FooterNav/>
        </footer>
    </React.Fragment>
    )
}

export default Footer;