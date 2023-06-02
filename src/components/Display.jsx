import React from 'react';
import '../components/WeApp.css';



function Display(props) {
    const {data} =props;
    const iconur1 ="http://openweathermap.org/img/wn/"+`${data.cod !== 404 ? data.weather[0].icon :null}`+"png";
    
  return (
    <div>Display</div>
  )
}

export default Display