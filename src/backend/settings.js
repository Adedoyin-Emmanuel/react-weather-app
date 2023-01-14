import { db } from "../backend/app_backend";
import jQuery from "jquery";
import Swal from "sweetalert2";
import navigate from "../inc/scripts/utilities";

export const saveLocation = (e) => {
  e.preventDefault();

  jQuery(($) => {
    $.noConflict();

    const $defaultLocation = $("#defaultLocation").val().trim();

    //check if the location is empty
    if ($defaultLocation === undefined || $defaultLocation == "") {
      Swal.fire({
        title: "Invalid Location!",
        html: "<p class=' text-center text-danger'>Please enter a valid location</p>",
        confirmButtonColor: "rgb(83, 166, 250)",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timer: 4000,
      });
    } else {
      db.update("USER_DEFAULT_LOCATION", $defaultLocation);
      Swal.fire({
        text: "Location updated successfully!",
        icon: "success",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  });
};

export const getDefaultLocation = () => {
  return db.get("USER_DEFAULT_LOCATION");
};

export const restoreFactorySettings = () => {
  db.destroy();
  navigate("/");
};

export const trackSavedLocationWeather = () => {
  jQuery(($) => {
    $.noConflict();
    const $toggleBtn = document.getElementById("flexSwitchCheckDefault");

    if ($toggleBtn.checked) {
      //check if the value is in the database, then update it
      if (db.get("TRACK_SAVED_LOCATION_WEATHER")) {
        db.update("TRACK_SAVED_LOCATION_WEATHER", true);
        Swal.fire({
          text: "Saved location would be tracked!",
          icon: "success",
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
        });
      }else{
        db.create("TRACK_SAVED_LOCATION_WEATHER", true);
        Swal.fire({
          text: "Saved location would be tracked!",
          icon: "info",
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } else {
      if (db.get("TRACK_SAVED_LOCATION_WEATHER")) {
        db.update("TRACK_SAVED_LOCATION_WEATHER", false);
        Swal.fire({
          text: "Saved location would not be tracked!",
          icon: "warning",
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
  });
};
