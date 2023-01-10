import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
const Settings = () =>{
    return (
        <React.Fragment>
            <section className="container-fluid">
                  
                    <h3 className="text-center">change settings</h3>
                    <section className="d-flex align-items-center justify-content-center">
                        <Button text="Home" className="brand-btn m-auto my-5 width-toggle" onClick={returnHome}/>
                    </section>
                    <Footer/>
            </section>
        </React.Fragment>
    )
}


export default Settings;