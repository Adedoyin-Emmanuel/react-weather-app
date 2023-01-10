import React from "react";
import Button from "../components/button";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
const Settings = () =>{

    const returnHome = ()=>{
        navigate("/weather");
    }
    return (
        <React.Fragment>
            <section className="container-fluid">
                  
                    <h3 className="text-center my-3 text-capitalize ">change settings</h3>
                    <section className="d-flex align-items-center justify-content-center">
                        <Button text="Home" className="brand-btn m-auto my-5 width-toggle" onClick={returnHome}/>
                    </section>
                    <Footer/>
            </section>
        </React.Fragment>
    )
}


export default Settings;