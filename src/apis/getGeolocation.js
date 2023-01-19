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
				//check if the user's position was saved before
               if(!db.get("USER_LONGITUDE") && !db.get("USER_LATITUDE")){
                    db.create("USER_LONGITUDE",position.coords.longitude);
                    db.create("USER_LATITUDE",position.coords.latitude);
               }else{
                //if saved, then get the current weather using their coordinates
                
                jQuery(($)=>{
                    $.noConflict();

                    const longitude = db.get("USER_LONGITUDE"), latitude = db.get("USER_LATITUDE");
                    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI.API_KEY}`;

					$.ajax({
						url:URL,
						processData:false,
						success:(result,status,xhr)=>{
							if(xhr.status != 200){
								Swal.fire({
									toast:true,
									position:"top",
									text:"Something went wrong!",
									icon:"info",
									showConfirmButton:false,
									timer:3000,
			
								});
							}else{
								//if API call was successful
								if(result.cod == 200){
									console.log(result);
								}
							}
						},
						error:(xhr,status,error)=>{
							Swal.fire({
								toast: true,
								text: error,
								icon: "warning",
								timer: 3000,
								position: "top",
								showConfirmButton: false,
							});
						}
					})
                })


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
