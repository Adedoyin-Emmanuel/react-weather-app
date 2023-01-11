import React from "react";
import rainIcon from "./../assets/rain (1).png";
import windIcon from "./../assets/windy.png";
import humidity from "./../assets/humidity.png";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Spinner from "../components/spinner";

const WeatherMain = (props) => {

	const navigateHome = () =>{
		navigate("/weather");
	}
    
	return (
		<React.Fragment>
			<Spinner/>
			<section
				className="container-fluid d-flex flex-column py-2 "
				style={{ overflowX: "hidden" }}>
				<section className="app-header d-flex justify-content-between">
					<div className="toggle-btn ">
					<svg height={"30"} id="Layer_1" version="1.1" onClick={navigateHome}viewBox="0 0 512 512" width={"30"} xmlns="http://www.w3.org/2000/svg" ><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
						
					</div>
					<section className="city-locaton">
						<h5 className="fw-bold fs-5">Lagos, 9ja</h5>
					</section>
					<div className="toggle-btn ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={"24px"}
							height={"24px"}
							viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z" />
						</svg>
					</div>
				</section>

				<section className="current-weather-value-container d-flex align-items-center justify-content-center flex-column my-4">
					<section className="d-flex ">
						<h1 className="current-weather-value fw-bold brand-large-text">
							25
						</h1>

						<sup className="fw-bold brand-medium-text current-weather-unit">
							o
						</sup>
					</section>

					<p className="text-muted text-start brand-small-text">Thunderstorm</p>
				</section>

				<section className="my-4 current-weather-assets d-flex align-items-center justify-content-between brand-tertiary-color rounded-3 shadow p-3 m-0">
					<section className="current-weather-wind-speed d-flex flex-column align-items-center justify-content-center">
						<section className="wind-icon">
							<img src={windIcon} height={"30"} width={"30"} />
						</section>
						<p className="wind-value fw-bold text-light text-center py-1">
							10 m/s
						</p>
						<p className="wind-text text-muted text-capitalize brand-small-text weather-text text-center">
							wind
						</p>
					</section>

					<section className="current-weather-humidity-degree d-flex flex-column align-items-center">
						<section className="humidity-icon">
							<img src={humidity} height={"30"} width={"30"} />
						</section>
						<p className="humidity-value fw-bold text-light  text-center py-1">
							98%
						</p>
						<p className="humidity-text text-muted text-capitalize text-center brand-small-text weather-text">
							humidity
						</p>
					</section>

					<section className="current-weather-rain-degree d-flex flex-column align-items-center">
						<section className="rain-icon d-flex align-items-center justify-content-center">
							<img src={rainIcon} height={"30"} width={"30"} />
						</section>
						<p className="rain-value fw-bold text-light text-center py-1">
							100%
						</p>
						<p className="rain-text text-muted text-capitalize text-center brand-small-text weather-text">
							rain
						</p>
					</section>
				</section>
               
				<Footer />
			</section>
		</React.Fragment>
	);
};

export default WeatherMain;
