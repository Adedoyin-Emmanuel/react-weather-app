import React from "react";
import Footer from "../components/footer";
const WeatherMain = props =>{
    return (
        <React.Fragment>
              <section className="container-fluid d-flex flex-column py-2 " style={{"overflowX":"hidden"}}>
                    <h3>what's popping</h3>
                <Footer/>
            </section>
        </React.Fragment>
    )
}


export default WeatherMain;