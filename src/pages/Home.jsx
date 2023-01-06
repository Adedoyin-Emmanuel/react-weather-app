import React from "react";
import "./../apis/getApi.js";
import Header from "./../components/header";
import Button from "./../components/button";


const Home = () =>{

    return (
        <React.Fragment>
            <h3 className='text-capitalize'>Welcome home</h3>

            <br/>
            <Button text="Hello world" style={{"color":"red"}}/>
            <Header/>
        </React.Fragment>
    )
}

export default Home;