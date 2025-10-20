import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "./MyComponent/Weather";
import Search from "./MyComponent/Search";
import axios from "axios";
import BgVideo from "./assets/Bg.mp4";
import Header from "./MyComponent/Header";
import Sidebar from "./MyComponent/Sidebar";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    if (!city) return;
    setSelectedCity(city);

    const apiKey = "967ce60861196c946d1e9775d74994b7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log("Weather API Response:", response.data);
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
  };
  useEffect(() => {
    fetchWeatherData("Multan");
  }, []);
  //Sidebar working

  const handleCitySelect = (selectedCity) => {
    fetchWeatherData(selectedCity);
    console.log("Fetch weather for:", selectedCity);
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Sidebar onCityClick={handleCitySelect} />
        <div className="container">
          <Search onSearch={fetchWeatherData} city={selectedCity} />
          <Weather weatherData={weatherData} />
        </div>
      </div>
      <div className="main-container">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default App;
