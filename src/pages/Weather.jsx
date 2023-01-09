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
                    <div className="toggle-btn">

                        <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"24px"} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></svg>
                    </div> 
                </section>

            <section className="current-weather-container">
                <section className="current-weather-value-container">
                    <h1 className="current-weather-value fw-bold display-1">
                        18 <sup className="fw-bold current-weather-unit">0</sup>
                    </h1>
                </section>
                <section className="current-weather-icon">   
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64">
                        <defs>
                            <filter id="blur" width="200%" height="200%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                                <feOffset dx="0" dy="4" result="offsetblur"/>
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.05"/>
                                </feComponentTransfer>
                                <feMerge> 
                                    <feMergeNode/>
                                    <feMergeNode in="SourceGraphic"/> 
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#blur)" id="thunder">
                            <g transform="translate(20,10)">
                                <g className="am-weather-cloud-1">
                                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-10,-6), scale(0.6)" />
                                </g>
                                <g>
                                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                                </g>
                                <g transform="translate(-9,28), scale(1.2)">
                                    <polygon className="am-weather-stroke" fill="orange" stroke="white" strokeWidth="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
                                </g>
                            </g>
                        </g>
                    </svg>
                   
                </section>
            </section>

            <section className="current-weather-assets">
                
                <section className="current-weather-wind-speed">

                </section>

                

            </section>

                <section className="d-flex align-items-center justify-content-center">

<Button text="search weather"className="brand-btn m-auto my-5 width-toggle" onClick={show}/>

</section>

                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default WeatherApp;