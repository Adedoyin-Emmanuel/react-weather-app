import React from "react";

const futureWeatherComponent = props =>{
   
    return (
       <React.Fragment>
            <section className="future-weather-container d-flex align-items-center justify-content-center flex-column">
                <section className="weather-wrapper">
                    <p className="brand-text-small text-muted">{props.time}</p>
                    <section className="weather-icon-section">
                            <img src ={props.icon} height={"20"} width={"20"}/>
                    </section>
                    <p className="brand-text-small fw-bold"> {props.weatherUnit}<sup>o</sup></p>
                </section>
            </section> 
       </React.Fragment>
    )
}


export default futureWeatherComponent;