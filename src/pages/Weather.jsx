import React from "react";
import Button from "./../components/button";
import Footer from "../components/footer";
import jQuery from "jquery";
const WeatherApp = () =>{

    function show(){
        jQuery(($)=>{

            $.noConflict();

            $(".utility-component").toggleClass("add-utility-component-height");

        })
    }
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column my-2">
                <h2 className="fs-2 text-capitalize text-center my-3">Zedd-weather app</h2>

                <p>Getting weather information comrade </p>
                <Button text="search weather"className="brand-btn m-auto my-5 width-toggle" onClick={show}/>
                <Footer/>

            </div>

        </React.Fragment>
    )
}

export default WeatherApp;