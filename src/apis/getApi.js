import jQuery from "jquery";

const API_KEY = "cd34f692e856e493bd936095b256b337";
export const getCurrentWeather = () => {
  jQuery(($) => {
    let userSearch = $("#searchWeather").val();

    const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${API_KEY}`

    $.ajax({
      url:SEARCH_URL,
      processData:false,
      success: (result,status,xhr)=>{
        if(xhr.status != 200){

        }else{
          console.log(result);  
        }
      }
    })
  });
};
