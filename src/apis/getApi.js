import jQuery from "jquery";


    jQuery(($)=>{
        $.noConflict();
    
       $.ajax({
            url: "../",
            success: (results) =>{
                //console.log(results[0]);
                
                results.forEach((result,index)=>{
                    console.log(result);
                });
                
            },
            error: (xhr,status,error)=>{
                console.log(status);
            }
       })
    });
