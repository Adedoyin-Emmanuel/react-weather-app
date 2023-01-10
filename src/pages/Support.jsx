import React from 'react';
import { Link } from 'react-router-dom';

const Support = () =>{
    return (
        <React.Fragment>
            <section className="container-fluid my-3">
                    <Link to="/weather">Home</Link>
                    <h4 className="text-center text-capitalize">abeg support your guy!</h4>
            </section>
        </React.Fragment>
    )
}

export default Support;