import jQuery from "jquery";
import { db } from "../backend/app_backend";
import { getCurrentDate } from "../inc/scripts/utilities";
import Swal from "sweetalert2";
import Thunder from "./../assets/static/thunder.svg";
import Day from "./../assets/static/day.svg";
import Drizzle from "./../assets/static/rainy-5.svg";
import Rainy from "./../assets/static/rainy-7.svg";
import Snowy from "./../assets/static/snowy-6.svg";
import Cloudy from "./../assets/static/cloudy-day-2.svg";
import FreezingRain from "./../assets/static/freezing-rain.svg";
import Misty from "./../assets/static/mist.svg";

export const closeUtilityComponent = () => {
	jQuery(($) => {
		$.noConflict();
		$(".cmp").addClass("d-none");
		$(".utility-component").removeClass("add-utility-component-height");
	});
};

export const API_KEY = "cd34f692e856e493bd936095b256b337";

export const WEATHER_UNIT = db.get("WEATHER_UNIT") || "metric";

export const scrollToElement = (elementId) => {
	document
		.getElementById(`${elementId}`)
		.scrollIntoView({ behaviour: "smooth" });
};

export const handleWeatherForm = (e, search) => {
	e.preventDefault();

	if (db.get("TRACK_SAVED_LOCATION_WEATHER") == "false") {
		Swal.fire({
			text: "Changes settings to track default location",
			icon: "info",
			timer: 1500,
			toast: true,
			showConfirmButton: false,
			position: "top",
		}).then((willProceed) => {
			scrollToElement("weatherContainer");
		});
	}

	let userSearch = jQuery("#searchWeather").val() || search;

	getCurrentWeather(userSearch.trim());

	scrollToElement("weatherContainer");
	jQuery(($) => {
		$("#searchWeather").val("");
	});
};

//function to determine custom icon packs to use
export let weatherSvg;
export const checkWeatherCode = (code) => {
	//check the result code states and allocate different icon svg depending on the weather code
	if (code >= 200 && !(code >= 300)) {
		//Thunder weather status
		weatherSvg = Thunder;
	} else if (code >= 300 && !(code != 400)) {
		//Drizzle weather status
		weatherSvg = Drizzle;
	} else if (code >= 500 && code != 511 && !(code >= 600)) {
		//Rainy weather status
		weatherSvg = Rainy;
	} else if (code >= 700 && !(code >= 800)) {
		//Mist weather status
		weatherSvg = Misty;
	} else if (code > 800 && !(code > 804)) {
		//Cloudy weather status
		weatherSvg = Cloudy;
	} else if (code == 511) {
		//Freezing rain weather status
		weatherSvg = FreezingRain;
	}else if (code == 800)
	{
		weatherSvg = Day;
	}else{
		//weather code doesn't exist
		weatherSvg = Misty;
	}

};

export const updateReactDom = (result) => {
	jQuery(($) => {
		$.noConflict();
		$("#searchWeather").val(" ");
		closeUtilityComponent();
		scrollToElement("weatherContainer");
		$("#weatherLocation").html(`${result.name} ${result.sys.country}`);
		$("#currentDeg").html(Math.ceil(result.main.temp));
		$("#weatherDes").html(result.weather[0].description);
		$("#currentDate").html(getCurrentDate());
		console.log(result.weather[0].id);
		checkWeatherCode(result.weather[0].id);
		console.log(weatherSvg);
		$("#main-weather-icon-container").html(`<img src=${weatherSvg} alt="main-weather-icon" width="64" height="64"/>`);
	});
};
export const getCurrentWeather = (location) => {
	jQuery(($) => {
		let userSearch = location;

		const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${API_KEY}&units=${WEATHER_UNIT}`;

		$.ajax({
			url: SEARCH_URL,
			processData: false,
			success: (result, status, xhr) => {
				if (xhr.status != 200) {
					Swal.fire({
						toast: true,
						position: "top",
						text: "Something went wrong!",
						icon: "info",
						showConfirmButton: false,
						timer: 1000,
					});
				} else {
					//check if the API returned a legit response
					if (result.cod === 200) {
						console.log(result);
						updateReactDom(result);
					}
				}
			},
			error: (xhr, status, error) => {
				$("#searchWeather").val(" ");
				closeUtilityComponent();

				//check if the error is empty
				if (error == "") {
					Swal.fire({
						toast: true,
						text: "Network Error!",
						icon: "info",
						timer: 1000,
						position: "top",
						showConfirmButton: false,
					}).then((willProceed) => {
						//scroll to top when the promise is resolved!
						scrollToElement("weatherContainer");
					});
				} else {
					Swal.fire({
						toast: true,
						text: error,
						icon: "warning",
						timer: 1000,
						position: "top",
						showConfirmButton: false,
					}).then((willProceed) => {
						//scroll to top when the promise is resolved!
						scrollToElement("weatherContainer");
					});
				}
			},
		});
	});
};
