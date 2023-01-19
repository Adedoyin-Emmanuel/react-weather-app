import jQuery from "jquery";
import { db } from "../backend/app_backend";
import Swal from "sweetalert2";

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
                toast:true,
                text:error.message,
                icon:"warning",
                timer:3000,
                position:"top",
                showConfirmButton:false
            })
		};
		const TRACK_ID = navigator.geolocation.watchPosition(
			(position) => {
				//save the user's longitude and latitude
               // if(!db.get("USER_LONGITUDE"))
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
