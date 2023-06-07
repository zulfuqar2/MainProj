import React from 'react';
import '../components/Wea.css';


const WeaApp = ({main}) => {
 
  const temprature = main.main.temp;
  const tempratureC = Math.round(main.main.temp- 273,15);
  const weatherDescription = main.weather[0].description;
  const weatherDescription2 = main.weather.icon;
  const humidity = main.main.humidity;
  const wind = main.wind.speed;

  console.log('we',main)
 
  return (
    <div className="weather-details">
      <h2 className='header'>Wheather App</h2>
      <div className='tem'>
      <p className='Celcius'> {tempratureC}<span className='c'>&#8451;</span> </p>
      {/* <p className='Degree'> {main.main.temp?temprature:null} <span>&#8490;</span></p> */}
      
      </div>
      <p className='Wheather'>Wheather: {main.weather?weatherDescription:null}</p>
      <p className='icon'>{main.weather?weatherDescription2:null}</p>
     
      <p className='Huidity'>Humidtiy: {main.main.humidity?humidity:null} %</p>
      <p className='wind'>Wind:  {wind? wind :null}  km/h</p> 

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
