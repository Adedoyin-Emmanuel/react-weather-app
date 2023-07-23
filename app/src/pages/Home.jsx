import React from "react";
import Button from "./../components/button";
import Img_1 from "./../assets/pic_1.png";
import Spinner from "./../components/spinner";
import navigate from "./../inc/scripts/utilities";
import { db } from "./../backend/app_backend";
import Swal from "sweetalert2";
import jQuery from "jquery";
const Home = () => {
  const customBtnStyle = {
    fontSize: "18px",
  };

  function click() {
    /**
     * Default App page
     * The user wouldn't be redirected here on next visit
     *
     */

    Swal.fire({
      title: "Default Location",
      html: "<input type='text' placeholder='Enter location' class='form-control border-1 p-3 brand-small-text w-100' id='defaultLocation'>",
      confirmButtonText: "Save Location",
      confirmButtonColor: "rgb(83, 166, 250)",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    }).then((willProceed) => {
      if (willProceed.isConfirmed) {
        jQuery(($) => {
          $.noConflict();
          const $defaultLocation = $("#defaultLocation").val().trim();

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
            Swal.fire({
              text: "Location saved successfully!",
              icon: "success",
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
            });

            //create a database attribute and save it
            db.create("HOME_PAGE_SEEN", true);
            db.create("USER_DEFAULT_LOCATION", $defaultLocation);
            db.create("TRACK_SAVED_LOCATION_WEATHER",false);
            db.create("WEATHER_UNIT","metric");
            navigate("weather");
          }
        });
      }
    });
  }

  return (
    <React.Fragment>
      <Spinner />
      <div className="weather-preloader container-fluid d-flex align-items-center flex-column">
        <main className="my-5 preloader-weather-heading">
          <h2 className="text-center text-capitalize m-auto fw-bold fs-2">
            How's today's weather?
          </h2>
        </main>

        <section
          className="m-auto text-center img-container my-md-4 my-3"
          id="img-container"
        >
          <img
            src={Img_1}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Button
          text="today's weather"
          style={customBtnStyle}
          className="brand-btn m-auto my-5 width-toggle"
          onClick={(event) => {
            click(event);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
