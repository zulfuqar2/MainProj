import React from 'react';

const WeaApp = ({ data }) => {
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  return (
    <div className="weather-details">
      <h2>Wheather App</h2>
      <p>Degree: {temperature}°K</p>
      <p>if: {weatherDescription}</p>
      <p>humidtiy: {humidity}%</p>
      <p>wind:{wind}</p>
    </div>
  );
};

export default WeaApp;




