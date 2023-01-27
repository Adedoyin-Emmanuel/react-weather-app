import React, {useState} from "react";
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
import Thunder from "./../assets/static/thunder.svg";
import Day from "./../assets/static/day.svg";
import Drizzle from "./../assets/static/rainy-5.svg";
import Rainy from "./../assets/static/rainy-7.svg";
import Snowy from "./../assets/static/snowy-6.svg";
import FreezingRain from "./../assets/static/freezing-rain.svg";
import Misty from "./../assets/static/mist.svg";
import BrokenClouds from "./../assets/static/broken-clouds.svg";
import OvercastClouds from "./../assets/static/overcast-clouds.svg";
import ScatteredClouds from "./../assets/static/scattered-clouds.svg";
import FewClouds from "./../assets/static/few-clouds.svg";
import Haze from "./../assets/static/haze.svg";
const ForecastWeather = () => {
  //holds the current component to insert into the utility footer component
	const [componentToInsert, setComponentToInsert] = useState("");

  const addUtilityComponentHeight = () => {
		//if the component is opened already, then close it
		// if (db.get("UTILITY_CMP_DISPLAY") == "true") {
		// 	closeUtilityComponent();
		// } else {
		// 	//else open the component
		jQuery(($) => {
			$.noConflict();
			$(".cmp").removeClass("d-none");
			$(".utility-component").toggleClass("add-utility-component-height");
			//db.create("UTILITY_CMP_DISPLAY", true);
		});
		//}
	};

	const closeUtilityComponent = () => {
		//db.update("UTILITY_CMP_DISPLAY", false);

		jQuery(($) => {
			$.noConflict();
			$(".cmp").addClass("d-none");
			$(".utility-component").removeClass("add-utility-component-height");
			setComponentToInsert("");
		});

		//update the search component
		//setWeatherInput("");
	};
  const MainWeatherForecast = () =>{
    return (
      <section className="city-location">
						<h5 className="fw-bold fs-5" id="weatherLocation">
							{db.get("WEATHER_LOCATION") || "Lagos 9ja"}
						</h5>
						<p className="date-time text-muted brand-small-text text-capitalize">
							{getCurrentDate()}
						</p>
					</section>
    )
  }

  	//create the main weather component forecast tags
	const MainWeatherComponent = () => {
		return (
      <React.Fragment>
			<section className="cmp d-flex align-items-center justify-content-center flex-column my-5">
				<section className="d-flex flex-row align-items-center justify-content-center d-none cmp cmp-1 my-5">
					{<MainWeatherForecast/>}
				</section>
				<section className="d-flex align-items-center justify-content-center">
					<Button
						text="main weather forecast"
						className="shadow brand-btn-2 toggle-width-3 my-5 "
					
					/>
				</section>
			</section>

      <section className="current-weather-container d-flex justify-content-between px-2 my-3">
					<section className="current-weather-value-container">
						<section className="d-flex ">
							<h1
								className="current-weather-value fw-bold brand-large-text"
								id="currentDeg">
								{Math.ceil(db.get("WEATHER_DEG")) || 30}
							</h1>

							<sup className="fw-bold brand-medium-text current-weather-unit">
								o
							</sup>
						</section>
						<p className="text-muted text-capitalize" id="weatherDes">
							{db.get("WEATHER_DESCRIPTION") || "clear sky"}
						</p>
					</section>
					<section
						className="current-weather-icon my-4 mx-3 px-3"
						id="main-weather-icon-container">
						<img
							src={formHandler.checkWeatherCode(db.get("WEATHER_CODE")) || Day}
							width={64}
							height={64}
							alt="main weather icon"
							id="main-weather-icon"
						/>
					</section>
				</section>
      </React.Fragment>
      
		);
	};

	//function to check if the dashboard icon was clicked
	const showMainWeatherComponent = () => {
		addUtilityComponentHeight();
		//change the variable to hold the current component to insert
		setComponentToInsert(<MainWeatherComponent />);
	};


  const navigateHome = ()=>{
    navigate("/weather");
  }
  const weekData = [
    {
      day: ["today"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },

    {
      day: ["today"],
      firstUnit: 13,
      secondUnit: 22,
      icon: windIcon,
    },

    {
      day: ["today"],
      firstUnit: 13,
      secondUnit: 22,
      icon: humidity,
    },

    {
      day: ["today"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },

    {
      day: ["today"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    }
  ];

  const uiData = weekData.map((data, index) => {
    return (
      <NextWeekComponent
        key={index}
        day={data.day}
        firstUnit={data.firstUnit}
        secondUnit={data.secondUnit}
        icon={data.icon}
      />
    );
  });

  return (
    <React.Fragment>
      <Spinner/>
      <section className="container-fluid">
      <section className="app-header d-flex justify-content-between">
					<div className="toggle-btn my-3">
         <svg height={"30"} id="Layer_1" version="1.1" onClick={navigateHome}viewBox="0 0 512 512" width={"30"} xmlns="http://www.w3.org/2000/svg" ><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
					</div>
					<section className="city-locaton">
						<h5 className="fw-bold fs-5 my-3">Lagos, 9ja</h5>
					</section>
					<div className="toggle-btn my-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={"24px"}
							height={"24px"}
							viewBox="0 0 24 24"
              onClick={showMainWeatherComponent}
              >
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z" />
						</svg>
					</div>
				</section>
        <section className="my-4 next-week-component-container d-flex align-items-center justify-content-start flex-column">
          {uiData}
        </section>
        <Footer utilityTags={componentToInsert}/>
        <br/><br/><br/>
      </section>
    </React.Fragment>
  );
};

export default ForecastWeather;
