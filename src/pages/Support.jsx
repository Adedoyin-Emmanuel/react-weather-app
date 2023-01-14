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
          <p className="py-2 text-muted">
            Few ways you can support the project
          </p>

          <section className="sponsor-me text-muted text-start">
            <section className="icon-section d-flex p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                height={"20"}
                width={"20"}
                fill={"rgb(83, 166, 250)"}
              >
                <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
              </svg>
              <p className=" text-capitalize px-3 text-dark">sponsor me!</p>
            </section>
            Hi, I`m Adedoyin Emmanuel. I built this weather app in 2023 to
            sharpen my react skills and also have a clean, ads free application
            I can use. I make most of my side projects open source with the hope
            people would be able to learn and use the things I build.
            <section className="d-md-flex align-items-center justify-content-center">
              <Button
                text="support on github"
                className="shadow brand-btn-3-secondary my-5 text-dark p-2 text-capitalize"
              />
            </section>
          </section>

          <section className="support-project text-muted text-start">
            <section className="icon-section d-flex p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"20"}
                width={"20"}
                fill={"rgb(83, 166, 250)"}
                viewBox="0 0 512 512"
              >
                <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
              </svg>
              <p className=" text-capitalize px-3 text-dark">
                support the development!
              </p>
            </section>
            You can view the source codes of this project, star the project,
            find bugs and contribute a fix. You can also suggest pickup
            development of new feature
            <section className="d-md-flex align-items-center justify-content-center">
              <Button
                text="view github repository"
                className="shadow brand-btn-3-secondary my-5 text-dark p-2 text-capitalize"
              />
            </section>
            <br/><br/>
          </section>
        </section>
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Settings;
