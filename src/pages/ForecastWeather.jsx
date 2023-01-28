import React, { useState, useEffect } from "react";
import rainIcon from "./../assets/rain (1).png";
import windIcon from "./../assets/windy.png";
import humidity from "./../assets/humidity.png";
import NextWeekComponent from "../components/nextWeekComponent";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Spinner from "../components/spinner";
import Button from "./../components/button";
import jQuery from "jquery";
import { db } from "../backend/app_backend";
import { getCurrentDate } from "../inc/scripts/utilities";
import * as formHandler from "./../apis/getCurrentWeather";
import HumidityIcon from "./../assets/humidity-icon.svg";
import WindIcon from "./../assets/wind-icon.svg";
import PressureIcon from "./../assets/pressure-icon.svg";
import FutureWeatherComponent from "./../components/futureWeatherComponent";
import { getWeatherForecast } from "../apis/getWeatherForecast";
import Swal from "sweetalert2";
const ForecastWeather = () => {
	//holds the current component to insert into the utility footer component
	const [componentToInsert, setComponentToInsert] = useState("");
	const [forecastData, setForecastData] = useState(null);

	useEffect(() => {
		jQuery(($) => {
			$.noConflict();
			const $API_KEY = "cd34f692e856e493bd936095b256b337";
			const $user_city = db.get("WEATHER_LOCATION");
			const $user_latitude = db.get("USER_LATITUDE");
			const $user_longitude = db.get("USER_LONGITUDE");

			if($user_city == null || $user_latitude == null || $user_longitude == null)
			{

			}
			$.ajax({
				url: `https://api.openweathermap.org/data/2.5/forecast?q=Nigeria&appid=${$API_KEY}`,
				success: (result, status, xhr) => {
					if (result.cod == 200) {
						//console.log(result);
						setForecastData(result);
					}
				},

				error: (xhr, status, error) => {
					console.log(error);
				},
			});
		});
	},[]);

	const addUtilityComponentHeight = () => {
		jQuery(($) => {
			$.noConflict();
			$(".cmp").removeClass("d-none");
			$(".utility-component").toggleClass("add-utility-component-height");
		});
	};
	const navigateToApp = () => {
		navigate("/weather");
	};
	//create the main weather component forecast tags
	const MainWeatherComponent = () => {
		return (
			<section className="d-flex align-items-center justify-content-center">
				<Button
					text="current weather forecast"
					className="shadow brand-btn-2 toggle-width-3 my-5 "
					onClick={navigateToApp}
				/>
			</section>
		);
	};

	//function to check if the dashboard icon was clicked
	const showMainWeatherComponent = () => {
		addUtilityComponentHeight();
		//change the variable to hold the current component to insert
		setComponentToInsert(<MainWeatherComponent />);
	};

	const navigateHome = () => {
		navigate("/weather");
	};

	//5 days API call

	const weekData = [
		{
			id: 1,
			day: ["mon"],
			firstUnit: 13,
			secondUnit: 22,
			icon: HumidityIcon,
		},

		{
			id: 2,
			day: ["tue"],
			firstUnit: 13,
			secondUnit: 22,
			icon: WindIcon,
		},

		{
			id: 3,
			day: ["wed"],
			firstUnit: 13,
			secondUnit: 22,
			icon: PressureIcon,
		},

		{
			id: 4,
			day: ["thu"],
			firstUnit: 13,
			secondUnit: 22,
			icon: WindIcon,
		},

		{
			id: 5,
			day: ["fri"],
			firstUnit: 13,
			secondUnit: 22,
			icon: HumidityIcon,
		},
	];

	const uiData = weekData.map((data, index) => {
		return (
			<NextWeekComponent
				key={data.id}
				day={data.day}
				firstUnit={data.firstUnit}
				secondUnit={data.secondUnit}
				icon={data.icon}
			/>
		);
	});

	let weatherData = [
		{
			id: 1,
			time: ["12am"],
			icon: [HumidityIcon],
			unit: ["10"],
		},

		{
			id: 2,
			time: ["3am"],
			icon: [PressureIcon],
			unit: ["50"],
		},

		{
			id: 3,
			time: ["6pm"],
			icon: [WindIcon],
			unit: ["50"],
		},

		{
			id: 4,
			time: ["9pm"],
			icon: [PressureIcon],
			unit: ["45"],
		},

		{
			id: 5,
			time: ["12pm"],
			icon: [WindIcon],
			unit: ["80"],
		},

		{
			id: 6,
			time: ["3pm"],
			icon: [WindIcon],
			unit: ["80"],
		},

		{
			id: 7,
			time: ["6pm"],
			icon: [WindIcon],
			unit: ["80"],
		},

		{
			id: 8,
			time: ["9pm"],
			icon: [WindIcon],
			unit: ["80"],
		},
	];

	const hourlyWeatherData = weatherData.map((data, index) => {
		return (
			<FutureWeatherComponent
				key={data.id}
				time={data.time}
				icon={data.icon}
				weatherUnit={data.unit}
			/>
		);
	});

	return (
		<React.Fragment>
			<Spinner />
			<section className="container-fluid">
				<section className="app-header d-flex justify-content-between">
					<div className="toggle-btn my-3">
						<svg
							height={"30"}
							id="Layer_1"
							version="1.1"
							onClick={navigateHome}
							viewBox="0 0 512 512"
							width={"30"}
							xmlns="http://www.w3.org/2000/svg">
							<polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
						</svg>
					</div>
					<section className="city-locaton">
						<h5 className="fw-bold fs-5 my-3">{`${db.get(
							"WEATHER_LOCATION"
						)}`}</h5>
					</section>
					<div className="toggle-btn my-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={"30px"}
							height={"30px"}
							viewBox="0 0 24 24"
							className="d-block"
							onClick={showMainWeatherComponent}>
							<path fill="white" d="M0 0h24v24H0V0z" />
							<path
								fill="lightskyblue"
								d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
							/>
						</svg>
					</div>
				</section>
				<section className="my-1 next-week-component-container d-flex flex-column my-1">
					{/* <section className="d-flex align-items-center justify-content-between mb-2">
						<h6 className="fw-bold fs-6 my-3 text-start text-capitalize ">
							{" "}
							Prediction
						</h6>
						<h6 className="fw-bold fs-6 my-3 text-start text-capitalize text-muted ">
							daily
						</h6>
					</section> */}
					{/* {uiData} */}

					{forecastData == null
						? console.log("data is null")
						: console.log(forecastData)}

					<br />
					<section className="d-flex align-items-center justify-content-between mb-2">
						<h6 className="fw-bold fs-6 my-3 text-start text-capitalize ">
							{" "}
							Prediction
						</h6>
						<h6 className="fw-bold fs-6 my-3 text-start text-capitalize text-muted ">
							Hourly
						</h6>
					</section>

					<section className="day-1-container future-weather-days d-flex align-items-center justify-content-start">
						<section className="today-section d-flex mx-2 flex-column align-items-center justify-content-center">
							<p className="brand-small-text text-capitalize fw-bold">Day 1</p>
							<div className="future-weather-notch-active"></div>
						</section>
					</section>
					<section
						className="day-1-weather future-weather-forecast my-4 d-flex align-items-center justify-content-between "
						style={{ overflowX: "scroll" }}>
						{hourlyWeatherData}
					</section>

					<br />
					<section className="day-2-container future-weather-days d-flex align-items-center justify-content-start">
						<section className="today-section d-flex mx-2 flex-column align-items-center justify-content-center">
							<p className="brand-small-text text-capitalize fw-bold">Day 2</p>
							<div className="future-weather-notch-active"></div>
						</section>
					</section>
					<section
						className="day-2-weather future-weather-forecast my-4 d-flex align-items-center justify-content-between "
						style={{ overflowX: "scroll" }}>
						{hourlyWeatherData}
					</section>

					<br />
					<section className="day-3-container future-weather-days d-flex align-items-center justify-content-start">
						<section className="today-section d-flex mx-2 flex-column align-items-center justify-content-center">
							<p className="brand-small-text text-capitalize fw-bold">Day 3</p>
							<div className="future-weather-notch-active"></div>
						</section>
					</section>
					<section
						className="day-3-weather future-weather-forecast my-4 d-flex align-items-center justify-content-between "
						style={{ overflowX: "scroll" }}>
						{hourlyWeatherData}
					</section>
					<br />

					<section className="day-4-container future-weather-days d-flex align-items-center justify-content-start">
						<section className="today-section d-flex mx-2 flex-column align-items-center justify-content-center">
							<p className="brand-small-text text-capitalize fw-bold">Day 4</p>
							<div className="future-weather-notch-active"></div>
						</section>
					</section>
					<section
						className="day-4-weather future-weather-forecast my-4 d-flex align-items-center justify-content-between "
						style={{ overflowX: "scroll" }}>
						{hourlyWeatherData}
					</section>
					<br />
					<section className="day-5-container future-weather-days d-flex align-items-center justify-content-start">
						<section className="today-section d-flex mx-2 flex-column align-items-center justify-content-center">
							<p className="brand-small-text text-capitalize fw-bold">Day 5</p>
							<div className="future-weather-notch-active"></div>
						</section>
					</section>

					<section
						className="day-5-weather future-weather-forecast my-4 d-flex align-items-center justify-content-between "
						style={{ overflowX: "scroll" }}>
						{hourlyWeatherData}
					</section>
				</section>

				<Footer utilityTags={componentToInsert} />
				<br />
				<br />
				<br />
			</section>
		</React.Fragment>
	);
};

export default ForecastWeather;
