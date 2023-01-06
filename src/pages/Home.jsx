import React from "react";
import "./../apis/getApi.js";
import Header from "./../components/header";
import Button from "./../components/button";
import Img_1 from "./../assets/pic_1.png";


const Home = () =>{

    return (
        <React.Fragment>
           <div className="weather-preloader container-fluid">

                <main className="my-5 preloader-weather-heading" >
                    <h2 className="text-center text-capitalize m-auto fw-bold">How's today weather?</h2>
                </main>


                <section className="m-auto text-center img-container" id="img-container">
                    <img src={Img_1} className="img-fluid m-auto" height="600" width="500"/>
                </section>

           </div>
           
        </React.Fragment>
    )
}

export default Home;