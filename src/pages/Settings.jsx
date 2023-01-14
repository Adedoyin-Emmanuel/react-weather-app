import React, { useState } from "react";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Button from "../components/button";
const Settings = () => {
  const navigateHome = () => {
    navigate("./weather");
  };

  const [defaultLocation, setDefaultLocation] = useState("");
  return (
    <React.Fragment>
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

        <section className="settings">
          <form action="">
            <label htmlFor="defaultLocation " className="brand-small-text py-3">
              Enter your default location
            </label>
            <input
              type="text"
              name="defaultLocation"
              id="defaultLocation"
              className="form-control p-3 my-1 brand-small-text width-toggle-4"
              value={defaultLocation}
              placeholder={"Enter your default location to track.."}
              onChange={(e) => {
                setDefaultLocation(e.target.value);
              }}
            />

            <section className="d-sm-flex align-items-center justify-content-md-center d-md-block">
              <Button
                text="save location"
                className="shadow brand-btn-3 toggle-width-3 my-5 width-toggle text-light text-capitalize"
              />
            </section>

             <hr className="horizontal-line py-3 w-50 m-auto "/>


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

            <section className="factory-settings my-3 row">
              <label
                htmlFor="factory-settings-reset "
                className="text-capitalize"
              >
                restore factory settings
              </label>
            <section className="d-sm-flex align-items-center justify-content-center d-md-block">

              <Button
                text="restore settings"
                className="shadow brand-btn-3-secondary toggle-width-3 my-5 width-toggle text-dark text-capitalize p-2"
              />
              </section>
              <br/><br/>
            </section>
          </form>
          <br/><br/>
        </section>
        <br/><br/>

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Settings;
