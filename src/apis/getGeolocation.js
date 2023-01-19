import jQuery from "jquery";
import { db } from "../backend/app_backend";
import Swal from "sweetalert2";

const getGeolocation = () =>{
    //check if the user's device supports Geolocation API
    if (navigator.geolocation){
        const OPTIONS = {
            
        }
       const TRACK_ID = navigator.geolocation.watchPosition((position)=>{})
    }else{
        Swal.fire({
            toast:true,
            text:"Geolocation not supported!",
            icon:"error",
            position:"top",
            showConfirmButton:false,
            timer:3000
        })
    }
}


export default getGeolocation;