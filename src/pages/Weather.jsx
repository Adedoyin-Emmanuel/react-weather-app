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
                    

                    
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        width="100px" height="100px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" >
                    <g>
                        <path d="M36.154,74.275c0,1.865-1.514,3.377-3.379,3.377s-3.377-1.512-3.377-3.377s3.377-6.901,3.377-6.901
                            S36.154,72.41,36.154,74.275z"/>
                        <path d="M50.691,84.553c0,1.866-1.512,3.378-3.379,3.378c-1.865,0-3.377-1.512-3.377-3.378c0-1.865,3.377-6.901,3.377-6.901
                            S50.691,82.688,50.691,84.553z"/>
                        <path d="M64.494,81.03c0,1.865-1.512,3.377-3.377,3.377s-3.379-1.512-3.379-3.377s3.379-6.902,3.379-6.902
                            S64.494,79.165,64.494,81.03z"/>
                        <g>
                            <path d="M49.328,67.374c-5.65,0-10.625-3.513-12.576-8.707c-1.832,0.896-3.84,1.364-5.885,1.364
                                c-7.416,0-13.451-6.034-13.451-13.452s6.035-13.452,13.451-13.452c1.301,0,2.58,0.188,3.82,0.557
                                c1.803-5.487,6.877-9.215,12.764-9.215c2.854,0,5.639,0.914,7.934,2.59c2.861-1.698,6.107-2.59,9.441-2.59
                                c10.23,0,18.553,8.322,18.553,18.55c0,10.229-8.322,18.553-18.553,18.553c-1.365,0-2.746-0.161-4.119-0.477
                                C58.25,64.989,53.971,67.374,49.328,67.374z M37.439,55.763c0.146,0,0.295,0.027,0.434,0.083c0.35,0.139,0.613,0.438,0.705,0.803
                                c1.248,4.931,5.668,8.375,10.75,8.375c4.088,0,7.834-2.239,9.777-5.844c0.262-0.483,0.822-0.723,1.352-0.574
                                c1.455,0.407,2.926,0.615,4.369,0.615c8.934,0,16.203-7.269,16.203-16.203c0-8.934-7.27-16.201-16.203-16.201
                                c-3.158,0-6.227,0.918-8.871,2.655c-0.434,0.283-1.002,0.251-1.398-0.08c-1.99-1.66-4.514-2.575-7.105-2.575
                                c-5.221,0-9.672,3.557-10.82,8.649c-0.076,0.336-0.297,0.623-0.604,0.783c-0.305,0.16-0.666,0.178-0.986,0.047
                                c-1.336-0.544-2.74-0.819-4.174-0.819c-6.121,0-11.102,4.981-11.102,11.103c0,6.122,4.98,11.103,11.102,11.103
                                c2.102,0,4.156-0.6,5.941-1.735C37,55.826,37.219,55.763,37.439,55.763z"/>
                        </g>
                    </g>
                    </svg>
                    <section className="d-flex m-auto align-items-center justify-content-center">

                            <Button text="search weather"className="brand-btn m-auto my-5 width-toggle" onClick={show}/>

                    </section>

                </section>
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default WeatherApp;