import React from "react";
import Button from "./../components/button";
import Footer from "../components/footer";
import jQuery from "jquery";
const WeatherApp = () =>{

    function show(){
        jQuery(($)=>{

            $.noConflict();
            
            $(".utility-component").css({"display":"flex"});
            
        })
    }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h2>Welcome To the react weather app</h2>

                <p>getting weather information comrade {":)"}</p>
                <Button text="today's weather"className="brand-btn m-auto my-5 width-toggle" onClick={()=>{show()}}/>

            </div>
            <Footer/>

        </React.Fragment>
    )
}

export default WeatherApp;