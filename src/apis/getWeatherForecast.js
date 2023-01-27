import jQuery from "jquery";

jQuery(($)=>{
    $.noConflict();
    const $API_KEY = "cd34f692e856e493bd936095b256b337";
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=${$API_KEY}`,
        success: (result, status, xhr) =>{
            if(result.cod == 200)
            {
                console.log(result);
            }
        },

        error: (xhr, status, error) =>{
            console.log(errror);
        }
    });


})