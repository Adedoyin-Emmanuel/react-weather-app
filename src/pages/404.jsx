import React from "react";
import Button from "../components/button";
import navigate from "../inc/scripts/utilities";
const NotFound = ()=>{
    
    const returnHome = ()=>{
        navigate("/weather");
    }
    return (
        <React.Fragment>
            <section className="container-fluid">
                    <h2 className="text-capitalize my-3 fs-3 fw-bold">not found!</h2>

                    <p className="text-muted text-capitalize">the page requested for was not found!</p>

                    <section className="d-flex align-items-center justify-content-center">
                        <Button text="Home" className="brand-btn m-auto my-5 width-toggle" onClick={returnHome}/>
                    </section>
            </section>
        </React.Fragment>
    )
}

export default NotFound;