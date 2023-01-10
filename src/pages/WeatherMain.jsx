import React from "react";
import Footer from "../components/footer";
const WeatherMain = props =>{
    return (
        <React.Fragment>
              <section className="container-fluid d-flex flex-column py-2 " style={{"overflowX":"hidden"}}>
                    <section className="app-header d-flex justify-content-between">
                            <div className="toggle-btn ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"24px"} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></svg>
                            </div> 
                            <section className="city-locaton">

                                <h5 className="fw-bold fs-5">Lagos, 9ja</h5>
                            </section>
                            <div className="toggle-btn ">

                                <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"24px"} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></svg>
                            </div> 
                        </section>

                <Footer/>
            </section>
        </React.Fragment>
    )
}


export default WeatherMain;