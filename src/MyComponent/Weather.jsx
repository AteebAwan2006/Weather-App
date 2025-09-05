import React from "react";
import sun from "../assets/sun.png";
import Humidity from "../assets/humidity.png";
import Rain from "../assets/rainy-day.png";
import clear from "../assets/weather.png";
import HeavyRain from "../assets/heavy-rain.png";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <p> Enter city name to fetch weather data</p>;
  }
  const { main, weather, name } = weatherData;
  console.log("log>>>", weather);
  let weatherIcons;
  switch (weather[0].main) {
     case "Clouds":
      weatherIcons = Rain;
      break;
   
    case "Clear":
      weatherIcons = sun;
      break;
case "Rain":
      weatherIcons = HeavyRain;
      break;


    default:
      weatherIcons = clear;

      break;
  }
  console.log("weather icon", weatherIcons);
  return (
    <>
      <div className="city-details">
        <h1>{name}</h1>
        <img src={weatherIcons} width={130} height={130} />

        <div className="temprature">
          <h2>{main.temp}</h2>
          <span>oC</span>
        </div>
      </div>

      <div className="pridiction">
        <div className="pricdit">
          <img src={Humidity} width={50} height={50} />
          <h3>Humidity</h3>
          <span>{main.humidity}</span>
        </div>
        <div className="pricdit">
          <img src={Rain} width={50} height={50} />
          <h4>Rain</h4>
          <span>{weather[0].main === "Clouds" ? "100%" : "Not Sure"}</span>
        </div>
      </div>
    </>
  );
};

export default Weather;
