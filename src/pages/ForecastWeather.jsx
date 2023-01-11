import React from "react";
import rainIcon from "./../assets/rain (1).png";
import windIcon from "./../assets/windy.png";
import humidity from "./../assets/humidity.png";
import NextWeekComponent from "../components/nextWeekComponent";
import Footer from "../components/footer";
const ForecastWeather = () => {
  const weekData = [
    {
      day: ["today"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },

    {
      day: ["tuesday"],
      firstUnit: 13,
      secondUnit: 22,
      icon: windIcon,
    },

    {
      day: ["wednesday"],
      firstUnit: 13,
      secondUnit: 22,
      icon: humidity,
    },

    {
      day: ["thursday"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },

    {
      day: ["friday"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },

    {
      day: ["saturday"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },

    {
      day: ["sunday"],
      firstUnit: 13,
      secondUnit: 22,
      icon: rainIcon,
    },
  ];

  const uiData = weekData.map((data, index) => {
    return (
      <NextWeekComponent
        day={data.day}
        firstUnit={data.firstUnit}
        secondUnit={data.secondUnit}
        icon={data.icon}
      />
    );
  });

  return (
    <React.Fragment>
      <section className="container-fluid">
        <section className="brand-tertiary-color m-0 p-2 next-week-component-container d-flex align-items-center justify-content-center flex-column">
          {uiData}
        </section>
      </section>
    </React.Fragment>
  );
};

export default ForecastWeather;
