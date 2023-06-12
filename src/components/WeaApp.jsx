import React from "react";
import "../components/Wea.css";

const WeaApp = ({ main }) => {
  const temprature = main.main.temp;
  const tempratureC = Math.round(main.main.temp - 273, 15);
  const weatherDescription = main.weather[0].description;
  const weatherDescription2 = main.weather.icon;
  const humidity = main.main.humidity;
  const wind = main.wind.speed;

  console.log("we", main);

  return (
    <div className="weather-details">
      <h2 className="header">Wheather App</h2>
      <div className="tem">
        <p className="Celcius">
          {" "}
          {tempratureC}
          <span className="c">&#8451;</span>{" "}
        </p>
      </div>
      <p className="Wheather">
        Wheather: {main.weather ? weatherDescription : null}
      </p>
      <p className="icon">{main.weather ? weatherDescription2 : null}</p>

      <p className="Huidity">
        Humidtiy: {main.main.humidity ? humidity : null} %
      </p>
      <p className="wind">Wind: {wind ? wind : null} km/h</p>
    </div>
  );
};

export default WeaApp;
