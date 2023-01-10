import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
const Settings = () =>{
    return (
        <React.Fragment>
            <section className="container-fluid">
                    <Link to={"/Weather"}>home</Link>
                    <h3 className="text-center">change settings</h3>
                    <Footer/>
            </section>
        </React.Fragment>
    )
}


export default Settings;