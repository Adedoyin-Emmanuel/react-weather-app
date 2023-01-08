import React from 'react';
import jQuery from 'jquery';

const UtilityComponent = () =>{
    function closeUtilityComponent(){
        jQuery(($)=>{
            $.noConflict();

            $(".utility-component").removeClass("add-utility-component-height");
        })
    }
    return (
        <React.Fragment>
            <section className="utility-component align-items-center justify-content-around m-auto width-toggle-3">
                    <div className="utility-notch" onClick={closeUtilityComponent}></div>
                    <div className="d-flex align-items-center justify-content-center text-center">
                        <p className=" m-auto text-center  text-capitalize ">search result not found!</p>
                      
                    </div>
                    <section className="jumbotron">
                     
                    </section>

            </section>
        </React.Fragment>
    )
}

export default UtilityComponent;
