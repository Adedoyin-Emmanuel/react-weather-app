import jQuery from "jquery";
import { db } from "../backend/app_backend";
import Swal from "sweetalert2";
import * as weatherAPI from "./getCurrentWeather";
const getGeolocation = () => {
	//check if the user's device supports Geolocation API
	if (navigator.geolocation) {
		const OPTIONS = {
			enableHighAccuracy: true,
			maximumAge: 0,
			timeout: Infinity,
		};
		const error = (error) => {
			Swal.fire({
				toast: true,
				text: error.message,
				icon: "warning",
				timer: 1000,
				position: "top",
				showConfirmButton: false,
			}).then((willProceed)=>{
				// @see line 52
				weatherAPI.scrollToElement("weatherContainer");
				
			});
		};
		navigator.geolocation.getCurrentPosition(
			(position) => {
				//check if the user's position was saved before
				if (!db.get("USER_LONGITUDE") && !db.get("USER_LATITUDE")) {
					db.create("USER_LONGITUDE", position.coords.longitude);
					db.create("USER_LATITUDE", position.coords.latitude);
				} else {
					//if saved, then get the current weather using their coordinates

					jQuery(($) => {
						$.noConflict();

						const longitude = position.coords.longitude || db.get("USER_LONGITUDE"),
							  latitude = position.coords.latitude || db.get("USER_LATITUDE");
						const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI.API_KEY}&units=${weatherAPI.WEATHER_UNIT}`;

						$.ajax({
							url: URL,
							processData: false,
							success: (result, status, xhr) => {
								if (xhr.status != 200) {
									Swal.fire({
										toast: true,
										position: "top",
										text: "Something went wrong!",
										icon: "info",
										showConfirmButton: false,
										timer: 3000,
									}).then((willProceed)=>{
										//scroll to top after notification
										weatherAPI.scrollToElement("weatherContainer");

									})
								} else {
									//if API call was successful
									if (result.cod == 200) {
										weatherAPI.updateReactDom(result);
										weatherAPI.scrollToElement("weatherContainer");
									}
								}
							},
							error: (xhr, status, error) => {
								Swal.fire({
									toast: true,
									text: error,
									icon: "warning",
									timer: 2000,
									position: "top",
									showConfirmButton: false,
								}).then((willProceed)=>{
									// @see line 52
									weatherAPI.scrollToElement("weatherContainer");
									
								})
							},
						});
					});
				}
			},
			error,
			OPTIONS
		);
	} else {
		Swal.fire({
			toast: true,
			text: "Geolocation not supported!",
			icon: "error",
			position: "top",
			showConfirmButton: false,
			timer: 3000,
		});
	}
};

export default getGeolocation;
