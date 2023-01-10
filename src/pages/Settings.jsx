import React from "react";
import { Link } from "react-router-dom";

const Settings = () =>{
    return (
        <React.Fragment>
            <section className="container-fluid">
                    <Link to={"/Weather"}>home</Link>
                    <h3 className="text-center">change settings</h3>
            </section>
        </React.Fragment>
    )
}


export default Settings;