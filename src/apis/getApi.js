import jQuery from "jquery";

const Load =  () =>{
    jQuery(($)=>{
        $.noConflict();
    
       $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/",
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
}

export default Load;