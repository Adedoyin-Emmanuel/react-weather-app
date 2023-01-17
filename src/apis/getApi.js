import jQuery from "jquery";

const API_KEY = "cd34f692e856e493bd936095b256b337";

export const handleWeatherForm = (e) =>{
  e.preventDefault();
  getCurrentWeather();
}
export const getCurrentWeather = () => {

	jQuery(($) => {
		let userSearch = $("#searchWeather").val();

		const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${API_KEY}&units=metric`;

		$.ajax({
			url: SEARCH_URL,
			processData: false,
			success: (result, status, xhr) => {https://openweathermap.org/img//w/11d.png
				if (xhr.status != 200) {
				} else {
					//check if the API returned a legit response
          if(result.cod === 200){
            console.log(result);
          }
				}
			},
		});
	});
};
