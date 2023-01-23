import jQuery from "jquery";
import { db } from "../backend/app_backend";
import { getCurrentDate } from "../inc/scripts/utilities";
import Swal from "sweetalert2";

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
			toast:true,
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

export default checkWeatherCode = (code) =>{
	
}

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
