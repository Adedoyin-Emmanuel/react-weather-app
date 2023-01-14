import React, { useState } from "react";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Button from "../components/button";
import Spinner from "../components/spinner";
const Settings = () => {
  const navigateHome = () => {
    navigate("./weather");
  };

  const [defaultLocation, setDefaultLocation] = useState("");
  return (
    <React.Fragment>
      <Spinner />
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
          <section className="support-header">
            <h5 className="fw-bold fs-5 text-capitalize">support developer</h5>
          </section>
          <div className="toggle-btn "></div>
        </section>
        <section className="support-developer d-flex align-items-start justify-content-center w-100 flex-column">
            <p className="py-2">Few ways you can support the project</p>

            <section className="sponsor-me">
              <section className="icon-section">
                  <img src="" alt="icon" />
                  <p className="text-muted text-capitalize">sponsor me!</p>
              </section>
            </section>
          <section className="d-md-flex align-items-center justify-content-md-center d-lg-block">
            <Button
              text="save location"
              className="shadow brand-btn-3  my-5 text-light text-capitalize"
            />
          </section>

          <section className="d-md-flex align-items-center justify-content-center d-lg-block">
            <Button
              text="restore settings"
              className="shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2"
            />
          </section>
        </section>
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Settings;
