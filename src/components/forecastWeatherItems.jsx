import React from "react";

const ForecastWeatherItems = props =>{
   
    return (
       <React.Fragment>
            <section className="my-0 future-weather-container d-flex align-items-center justify-content-center flex-column brand-tertiary-color px-4  rounded-3 shadow mx-2">
                <section className="weather-wrapper d-flex flex-column align-items-center justify-content-center">
                    <p className="brand-small-text text-light py-1 text-center">{props.name}</p>
                    <section className="weather-icon-section py-1">
                            <img src ={props.icon} height={"30"} width={"30"} alt={"weather-image"}/>
                    </section>
                    <p className="brand-small-text-2 fw-bold text-center text-light"> {props.weatherUnit}<sup>o</sup></p>
                </section>
            </section> 
       </React.Fragment>
    )
}


export default ForecastWeatherItems;