import React, { useState, useMemo } from "react";
import jQuery from "jquery";
import Button from "./../components/button";
import Footer from "../components/footer";
import rainIcon from "./../assets/rain (1).png";
import windIcon from "./../assets/windy.png";
import humidity from "./../assets/humidity.png";
import FutureWeatherComponent from "../components/futureWeatherComponent";
import navigate from "../inc/scripts/utilities";
import ForecastWeatherItems from "../components/forecastWeatherItems";
import Spinner from "../components/spinner";
import Ripple1 from "./../assets/ripple1.gif";
import Location from "./../assets/map.png";
import * as formHandler from "./../apis/getCurrentWeather";
import { db } from "../backend/app_backend";

const WeatherApp = () => {
	//holds the current component to insert into the utility footer component
	const [componentToInsert, setComponentToInsert] = useState("");
	const [weatherInput, setWeatherInput] = useState();

	const addUtilityComponentHeight = () => {
    //if the component is opened already, then close it
		if (db.get("UTILITY_CMP_DISPLAY") == "true") {
      closeUtilityComponent();

		}else{
      //else open the component
      jQuery(($) => {
				$.noConflict();
				$(".cmp").removeClass("d-none");
				$(".utility-component").toggleClass("add-utility-component-height");
				db.create("UTILITY_CMP_DISPLAY", true);

        
			});
    }
	};

	const closeUtilityComponent = () => {
		jQuery(($) => {
			$.noConflict();
			$(".cmp").addClass("d-none");
			$(".utility-component").removeClass("add-utility-component-height");
      db.update("UTILITY_CMP_DISPLAY",false);
      
		});
	};


  const getCurrentLocation = () =>{
    console.log("leemao");
  }

	let weatherData = [
		{
			time: ["10am"],
			icon: [windIcon],
			unit: ["10"],
		},

		{
			time: ["11am"],
			icon: [rainIcon],
			unit: ["50"],
		},

		{
			time: ["12pm"],
			icon: [windIcon],
			unit: ["50"],
		},

		{
			time: ["1pm"],
			icon: [humidity],
			unit: ["45"],
		},

		{
			time: ["2pm"],
			icon: [rainIcon],
			unit: ["80"],
		},
	];
	let forecastData = [
		{
			name: ["Keketu"],
			icon: [windIcon],
			unit: ["10"],
		},

		{
			name: ["Sango"],
			icon: [rainIcon],
			unit: ["50"],
		},
	];

	const uiData = weatherData.map((data, index) => {
		return (
			<FutureWeatherComponent
				key={data.time}
				time={data.time}
				icon={data.icon}
				weatherUnit={data.unit}
			/>
		);
	});

	const showMoreWeather = () => {
		navigate("weathermain");
	};

	const uiForeCastData = forecastData.map((data, index) => {
		return (
			<ForecastWeatherItems
				key={data.name}
				name={data.name}
				icon={data.icon}
				weatherUnit={data.unit}
			/>
		);
	});
	const showForecastWeather = () => {
		navigate("/forecast");
	};
	//create the weather forecast component
	const UtilityForecastTags = () => {
		return (
			<section className=" d-flex align-items-center justify-content-center flex-column my-5">
				<section className="d-flex flex-row align-items-center justify-content-center d-none cmp cmp-1 my-5">
					{uiForeCastData}
				</section>
				<section className="d-flex align-items-center justify-content-center">
					<Button
						text="forecast weather"
						className="shadow brand-btn-2 toggle-width-3 my-5 "
						onClick={showForecastWeather}
					/>
				</section>
			</section>
		);
	};

	//function to check if the dashboard icon was clicked
	const beginWeatherForecast = () => {
		addUtilityComponentHeight();
		//change the variable to hold the current component to insert
		setComponentToInsert(<UtilityForecastTags />);
	};

	const SearchComponent = () => {
		return (
			<section className=" d-flex align-items-center justify-content-center flex-column my-5">
				<form
					id="searchWeatherForm"
					onSubmit={(e) => {
						formHandler.handleWeatherForm(e);
					}}>
					<label htmlFor="searchWeather" className="py-2 text-capitalize ">
						search city
					</label>
					<input
						type="text"
						name="searchWeather"
						id="searchWeather"
						placeholder="Enter the name of city"
						value={weatherInput}
						className="form-control search-input p-3 brand-small-text w-100"
						onChange={(e) => {
							setWeatherInput(e.target.value);
						}}
					/>
					<p
						className="error-holder text-danger py-3 fs-6 brand-small-text text-center d-none"
						id="searchErrorLog">
						city not found
					</p>

					<section className="d-none "></section>
				</form>
			</section>
		);
	};
	//load the search component into the utility component
	const testSearch = () => {
		addUtilityComponentHeight();
		setComponentToInsert(<SearchComponent />);
	};

	return (
		<React.Fragment>
			<Spinner />
			<div
				className="container-fluid d-flex flex-column py-2 px-0"
				style={{ overflowX: "hidden" }}>
				<section className="app-header d-flex justify-content-between px-2 flex-row-reverse " >
					<section className="city-location">
						<h5 className="fw-bold fs-5" id="weatherLocation">
							Lagos 9ja
						</h5>
						<p className="date-time text-muted brand-small-text text-capitalize">
							10 january tuesday
						</p>
					</section>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={"35px"}
						height={"35px"}
						viewBox="0 0 24 24"
						className="d-block"
						onClick={beginWeatherForecast}>
						<path fill="white" d="M0 0h24v24H0V0z" />
						<path
							fill="lightskyblue"
							d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
						/>
					</svg>
				</section>
				<section className="current-weather-container d-flex justify-content-between px-2 my-2">
					<section className="current-weather-value-container">
						<section className="d-flex ">
							<h1
								className="current-weather-value fw-bold brand-large-text"
								id="currentDeg">
								18
							</h1>

							<sup className="fw-bold brand-medium-text current-weather-unit">
								o
							</sup>
						</section>
						<p className="text-muted text-capitalize" id="weatherDes">
							Thunderstorm
						</p>
					</section>
					<section className="current-weather-icon my-4 mx-4">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 64 64">
							<defs>
								<filter id="blur" width="200%" height="200%">
									<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
									<feOffset dx="0" dy="4" result="offsetblur" />
									<feComponentTransfer>
										<feFuncA type="linear" slope="0.05" />
									</feComponentTransfer>
									<feMerge>
										<feMergeNode />
										<feMergeNode in="SourceGraphic" />
									</feMerge>
								</filter>
							</defs>
							<g filter="url(#blur)" id="thunder">
								<g transform="translate(20,10)">
									<g className="am-weather-cloud-1">
										<path
											d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
											fill="#91C0F8"
											stroke="white"
											strokeLinejoin="round"
											strokeWidth="1.2"
											transform="translate(-10,-6), scale(0.6)"
										/>
									</g>
									<g>
										<path
											d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
											fill="#57A0EE"
											stroke="#FFFFFF"
											strokeLinejoin="round"
											strokeWidth="1.2"
											transform="translate(-20,-11)"
										/>
									</g>
									<g transform="translate(-9,28), scale(1.2)">
										<polygon
											className="am-weather-stroke"
											fill="orange"
											stroke="white"
											strokeWidth="1"
											points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9"
										/>
									</g>
								</g>
							</g>
						</svg>
					</section>
				</section>
				{/* d-flex align-items-center justify-content-between brand-tertiary-color rounded-3 shadow p-3 m-0" */}
				<section
					className="mx-2 rounded-3 shadow my-5 py-2 current-weather-assets brand-tertiary-color d-flex align-items-center justify-content-around"
					onClick={showMoreWeather}>
					<section className="current-weather-wind-speed d-flex flex-column align-items-center justify-content-center">
						<section className="wind-icon">
							<img src={windIcon} height={"30"} width={"30"} />
						</section>
						<p className="wind-value fw-bold text-light text-center py-1 m-0">
							100%
						</p>
						<p className="m-0 wind-text text-muted text-capitalize brand-small-text-2 weather-text text-center">
							humidity
						</p>
					</section>

					<section className=" current-weather-humidity-degree d-flex flex-column align-items-center ">
						<section className="humidity-icon">
							<img src={humidity} height={"30"} width={"30"} />
						</section>
						<p className="humidity-value fw-bold text-light  text-center py-1 m-0">
							98%
						</p>
						<p className="m-0 humidity-text text-muted text-capitalize text-center brand-small-text-2 weather-text">
							humidity
						</p>
					</section>

					<section className="current-weather-rain-degree d-flex flex-column align-items-center">
						<section className="rain-icon">
							<img src={rainIcon} height={"30"} width={"30"} />
						</section>
						<p className="rain-value fw-bold text-light text-center py-1 m-0">
							100%
						</p>
						<p className="m-0 rain-text text-muted text-capitalize text-center brand-small-text-2 weather-text">
							humidity
						</p>
					</section>
				</section>
				<section className="future-weather-days d-flex align-items-center justify-content-start">
					<section className="today-section d-flex mx-2 flex-column align-items-center justify-content-center">
						<p className="brand-small-text text-capitalize fw-bold">today</p>
						<div className="future-weather-notch-active"></div>
					</section>
					<section className="tomorrow-section d-flex mx-2 flex-column align-items-center justify-content-center">
						<p className="brand-small-text text-capitalize">tomorrow</p>
						<div className="future-weather-notch"></div>
					</section>
					<section className="week-section d-flex mx-2 flex-column align-items-center justify-content-center">
						<p className="brand-small-text text-capitalize">next</p>
						<div className="future-weather-notch"></div>
					</section>
				</section>
				<section
					className="future-weather-forecast my-4 d-flex align-items-center justify-content-between "
					style={{ overflowX: "scroll" }}>
					{uiData}
				</section>
				<section className="ripple-container d-flex align-items-center justify-content-center">
					<section className="map-container d-flex align-items-center justify-content-center">
						<img
							src={Location}
							alt={"google-map"}
							height={"30"}
							width={"30"}
							className="map"
						/>
					</section>
					<section className="ripple-section d-flex align-items-center justify-content-center">
						<img
							src={Ripple1}
							width={"300"}
							height={"300"}
							alt={"ripple-efffect"}
						/>
					</section>
				</section>

				<section className="d-flex align-items-center justify-content-center">
					<Button
						text="current location"
						className="brand-btn my-5 width-toggle"
            onClick={getCurrentLocation}
					/>
					<br />
				</section>

				<br />
				<br />
				<br />
				<Footer utilityTags={componentToInsert} onClick={testSearch} />
			</div>
		</React.Fragment>
	);
};

export default WeatherApp;
