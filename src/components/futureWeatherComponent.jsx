import React from "react";

const FutureWeatherComponent = props =>{
   
    return (
       <React.Fragment>
            <section className="future-weather-container d-flex align-items-center justify-content-center flex-column brand-tertiary-color px-4  rounded-3 shadow mx-2">
                <section className="weather-wrapper">
                    <p className="brand-text-small text-muted py-2">{props.time}</p>
                    <section className="weather-icon-section">
                            <img src ={props.icon} height={"30"} width={"30"}/>
                    </section>
                    <p className="brand-text-small fw-bold py-1"> {props.weatherUnit}<sup>o</sup></p>
                </section>
            </section> 
       </React.Fragment>
    )
}


export default FutureWeatherComponent;