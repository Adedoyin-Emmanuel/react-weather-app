import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
const Support = () =>{
    return (
        <React.Fragment>
            <section className="container-fluid my-3">
                    
                    <h4 className="text-center text-capitalize">abeg support your guy!</h4>

                    <section className="d-flex align-items-center justify-content-center">
                        <Button text="Home" className="brand-btn m-auto my-5 width-toggle" onClick={returnHome}/>
                    </section>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Support;