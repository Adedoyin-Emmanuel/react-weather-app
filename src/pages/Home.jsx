import React from "react";
import "./../apis/getApi.js";
import Button from "./../components/button";
import Img_1 from "./../assets/pic_1.png";
import Spinner from "./../components/spinner";
import "./../inc/scripts/utilities";

const Home = () =>{

    const customBtnStyle = {
        "fontSize":"18px"
   
    }

    function click(){
       navigate(weather);
    }

    return (
        <React.Fragment>
            <Spinner/>
           <div className="weather-preloader container-fluid d-flex align-items-center flex-column">

                <main className="my-5 preloader-weather-heading" >
                    <h2 className="text-center text-capitalize m-auto fw-bold fs-2">How's today weather?</h2>
                </main>


                <section className="m-auto text-center img-container my-md-4 my-3" id="img-container">
                    <img src={Img_1} className="img-fluid m-auto preloader-img" height="700" width="550" alt="current-weather-status"/>
                </section>

                <br/><br/><br/>
                <br/><br/>

                <Button text="today's weather" style={customBtnStyle} className="brand-btn m-auto my-5 width-toggle" onClick={(event)=>{click(event)}}/>
           </div>
           
        </React.Fragment>
    )
}

export default Home;