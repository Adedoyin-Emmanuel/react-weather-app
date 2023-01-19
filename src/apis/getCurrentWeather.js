import jQuery from "jquery";
import { db } from "../backend/app_backend";
import { getCurrentDate } from "../inc/scripts/utilities";

const closeUtilityComponent = () => {
	jQuery(($) => {
		$.noConflict();
		$(".cmp").addClass("d-none");
		$(".utility-component").removeClass("add-utility-component-height");
	});
};

const API_KEY = "cd34f692e856e493bd936095b256b337";

export const handleWeatherForm = (e) => {
	e.preventDefault();
	getCurrentWeather();

	//empty the search bar once data is fetched

	jQuery(($) => {
		$("#searchWeather").val(" ");
	});
};
export const getCurrentWeather = () => {
	jQuery(($) => {
		let userSearch = $("#searchWeather").val();

		const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${API_KEY}&units=metric`;

		$.ajax({
			url: SEARCH_URL,
			processData: false,
			success: (result, status, xhr) => {
				if (xhr.status != 200) {
				} else {
					//check if the API returned a legit response
					if (result.cod === 200) {
						$("#searchWeather").val("");
						closeUtilityComponent();
						$("#weatherLocation").html(result.name);
						$("#currentDeg").html(Math.ceil(result.main.temp));
						$("#weatherDes").html(result.weather[0].description);
						$("#currentDate").html(getCurrentDate());
						//remove the searh error log if API call was successful
						$("#searchErrorLog").addClass("d-none");
					}
				}
			},
			error: (xhr, status, error) => {
				error != ""
					? $("#searchErrorLog").removeClass("d-none").html(error)
					: $("#searchErrorLog").addClass("d-none");
			},
		});
	});
};
