import React from "react";

const ForecastDailyWeatherComponent = props =>{
    const customStyle = {
        "overscrollX":"scroll",
        "scrollbarWidth":"none"
       }
    return (
       <React.Fragment>
            <section style={customStyle} id="future-weather-container" className="future-weather-container d-flex align-items-center justify-content-center flex-column brand-bg-white px-4  rounded-3 shadow-sm mx-2 my-3" title={props.title} onClick={props.onClick}>
                <section className="weather-wrapper d-flex flex-column align-items-center justify-content-center">
                    <p className="brand-small-text-2  py-1 text-center m-0">{props.time}</p>
                    <section className="weather-icon-section py-1">
                            <img src ={props.icon} height={"40"} width={"50"} alt={"sub-weather-icon"} />
                    </section>
                    <p className="brand-small-text fw-bold text-center m-0"> {props.weatherUnit}<sup>o</sup></p>
                </section>
            </section> 
       </React.Fragment>
    )
}


export default ForecastDailyWeatherComponent;