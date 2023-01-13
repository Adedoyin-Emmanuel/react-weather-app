import jQuery from "jquery";


    jQuery(($)=>{
        $.noConflict();
        
        $("#getweatherForm").onSubmit((e)=>{
            console.log(e)
        });
        
    });
