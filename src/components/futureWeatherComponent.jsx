import React from "react";

const FutureWeatherComponent = props =>{
   
    return (
       <React.Fragment>
            <section className="future-weather-container d-flex align-items-center justify-content-center flex-column brand-tertiary-color px-4  rounded-3 shadow mx-2">
                <section className="weather-wrapper d-flex flex-column align-items-center justify-content-center">
                    <p className="brand-small-text text-light py-1 text-center">{props.time}</p>
                    <section className="weather-icon-section py-1">
                            <img src ={props.icon} height={"30"} width={"30"}/>
                    </section>
                    <p className="brand-small-text-2 fw-bold text-center text-light"> {props.weatherUnit}<sup>o</sup></p>
                </section>
            </section> 
       </React.Fragment>
    )
}


export default FutureWeatherComponent;