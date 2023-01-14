import React, { useState } from "react";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Button from "../components/button";
import Spinner from "../components/spinner";
import * as settings from "./../backend/settings";
const Settings = () => {
  const navigateHome = () => {
    navigate("./weather");
  };

  const [defaultLocation, setDefaultLocation] = useState("");
  return (
    <React.Fragment>
      <Spinner/>
      <section className="container-fluid">
        <section className="app-header d-flex justify-content-between my-3">
          <div className="toggle-btn ">
            <svg
              height={"30"}
              id="Layer_1"
              version="1.1"
              onClick={navigateHome}
              viewBox="0 0 512 512"
              width={"30"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
            </svg>
          </div>
          <section className="city-locaton">
            <h5 className="fw-bold fs-5 text-capitalize">change Settings</h5>
          </section>
          <div className="toggle-btn "></div>
        </section>
        <section className="d-flex align-items-start justify-content-center w-100">
        <section className="settings">
          <form action="">
            <label htmlFor="defaultLocation " className="brand-small-text py-3">
              Enter your default location
            </label>
            <input
              type="text"
              name="defaultLocation"
              id="defaultLocation"
              className="form-control p-3 my-1 brand-small-text "
              value={defaultLocation}
              placeholder={"Enter your default location to track.."}
              onChange={(e) => {
                setDefaultLocation(e.target.value);
              }}
            />

            <section className="d-md-flex align-items-center justify-content-md-center d-lg-block">
              <Button
                text="save location"
                className="shadow brand-btn-3  my-5 text-light text-capitalize"
              />
            </section>

            <hr className="horizontal-line py-3 w-75 m-auto " />

            <section className="factory-settings my-3">
              <label
                htmlFor="factory-settings-reset "
                className="text-capitalize"
              >
                restore factory settings
              </label>
              <section className="d-md-flex align-items-center justify-content-center d-lg-block">
                <Button
                  text="restore settings"
                  className="shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2"
                />
              </section>
              <p className="text-muted brand-small-text">
                Restoring factory settings removes all the data stored on this device. You would be taken to the setup screen.
              </p>
            </section>

            <section className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label text-capitalize"
                htmlFor="flexSwitchCheckDefault"
              >
                track saved location weather
              </label>
            </section>
            <br />
            <br />
          </form>
          <br />
          <br />
        </section>
        </section> 

        <br />
        <br />

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Settings;
