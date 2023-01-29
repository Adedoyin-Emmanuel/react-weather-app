import React from "react";

const ForecastWeatherItems = props =>{
    const customStyle = {
        "overscrollX":"scroll",
        "scrollbarWidth":"none"
       }
    return (
       <React.Fragment>
            <section style={customStyle} className="future-weather-container d-flex align-items-center justify-content-between flex-column brand-bg-white px-4  rounded-3 shadow mx-4">
                <section className="weather-wrapper d-flex flex-column align-items-center justify-content-between">
                    <p className="brand-small-text-2 text-dark py-1 text-center m-0">{props.name}</p>
                    <section className="weather-icon-section py-1">
                            <img src ={"sub-weather-icon"} height={"30"} width={"30"} alt={"weather-image"}/>
                    </section>
                    <p className="brand-small-text fw-bold text-center text-dark m-0"> {props.weatherUnit}<sup>o</sup></p>
                </section>
            </section> 
       </React.Fragment>
    )
}


export default ForecastWeatherItems;