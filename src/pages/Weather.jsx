import React from "react";
import jQuery from "jquery";
import Button from "./../components/button";
import Footer from "../components/footer";


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
                {/* <h2 className="fs-2 text-capitalize text-center my-3">Zedd-weather app</h2>

                <p className="text-sm-center">Getting weather information comrade </p>
                <Button text="search weather"className="brand-btn m-auto my-5 width-toggle" onClick={show}/>
                <Footer/> */}
                <section className="app-header">
                    <section className="city-locaton">
                        <h3>Lagos, 9ja</h3>
                         <p className="date-time text-muted brand-small-text">Today, Jan 9 5:49AM</p>
                    </section>
                    <div className="toggle-btn"></div> 
                </section>

                <section className="current-weather-icon">
                    

                    


                </section>

            </div>

        </React.Fragment>
    )
}

export default WeatherApp;