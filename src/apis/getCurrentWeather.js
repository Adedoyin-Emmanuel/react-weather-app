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

export const scrollToElement = (elementId) => {
	document
		.getElementById(`${elementId}`)
		.scrollIntoView({ behaviour: "smooth" });
};

export const handleWeatherForm = (e, search) => {
	e.preventDefault();

	if (!db.get("USER_DEFAULT_LOCATION")) {
		Swal.fire({
			text: "Please set default location to track",
			icon: "info",
			timer: 1500,
			showConfirmButton: false,
			position: "top",
		}).then((willProceed) => {
			scrollToElement("weatherContainer");
		});
	}

	let userSearch = jQuery("#searchWeather").val() || search;
	getCurrentWeather(userSearch);

	jQuery(($) => {
		$("#searchWeather").val(" ");
	});
};

export const updateReactDom = (result) => {
	jQuery(($) => {
		$.noConflict();
		$("#searchWeather").val(" ");
		closeUtilityComponent();
		scrollToElement("weatherContainer");
		$("#weatherLocation").html(result.name);
		$("#currentDeg").html(Math.ceil(result.main.temp));
		$("#weatherDes").html(result.weather[0].description);
		$("#currentDate").html(getCurrentDate());
	});
};
export const getCurrentWeather = (location) => {
	jQuery(($) => {
		let userSearch = location;

		const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${API_KEY}&units=metric`;

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
