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




// import React, { useState } from 'react';
// import axios from 'axios';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [country, setCountry] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const getWeatherData = async () => {
//     try {
//       const apiKey = '47b8c411cbaefbb5c821ccfce0e210fa'; 
//       const url = `https://api.openweathermap.org/data/2.5/weather?q= ${form.city},${form.country}&APPID=${APIKEY}`;

//       const response = await axios.get(url);
//       const data = response.data;


//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'city') {
//       setCity(value);
//     } else if (name === 'country') {
//       setCountry(value);
//     }
//   };

//   return (
//     <div>
//       <input type="text" name="city" placeholder="Şehir" onChange={handleInputChange} />
//       <input type="text" name="country" placeholder="Ülke" onChange={handleInputChange} />
//       <button onClick={getWeatherData}>Hava Durumu Kontrol Et</button>

//       {weatherData && (
//         <div>
//           <h2>Hava Durumu</h2>
//           <p>Degree: {weatherData.current.temp_c}°C</p>
//           <p>if: {weatherData.current.condition.text}</p>
//           <p>humidity: {weatherData.current.humidity}%</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
