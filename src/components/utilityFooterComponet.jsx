import React from 'react';

const UtilityComponent = () =>{
    return (
        <React.Fragment>
            <section className="utility-component align-items-center justify-content-around">
                    <div className="utility-notch"></div>
                    <div className="d-flex align-items-center justify-content-center text-center">
                        <h5 className=" m-auto text-center  text-capitalize ">sign up or login</h5>
                        {/* <span>{"X"}</span> */}
                    </div>
                    <section className="jumbotron">
                        {/* <p>i am a high jumbotron</p> */}
                    </section>

            </section>
        </React.Fragment>
    )
}

export default UtilityComponent;
