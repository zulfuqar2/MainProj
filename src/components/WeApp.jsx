import React, { useState, useEffect } from 'react';
import './WeApp.css';
import WeaApp from '../components/WeaApp';
import SayHi from './SayHi';
import CurrentTime from '../components/CurrentTime';


const successCallback = (position) => {
  const { latitude, longitude } = position.coords;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`)
    .then((res) => res.json())
    .then((data) => setWeather(data));
};
const errorCallback = (error) => {
  console.log(error);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function WeApp() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: '',
    country: '',
  });

  const APIKEY = '47b8c411cbaefbb5c821ccfce0e210fa';

  async function weatherMain(e) {
    e.preventDefault();
    if (form.city === '') {
      alert('Please Enter City location');
    } else {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
        .then((res) => res.json());
      console.log(data);
      setWeather(data);
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'city') {
      setForm({ ...form, city: value });
    } else {
      console.log("error");
    }
    if (name === 'country') {
      setForm({ ...form, country: value });
    }
  }

  return (
    <>
      <div className='weapp'>

        {/* <span className='title'>My Weather App</span> */}
        <br />
        <div className='whole'>
          <form action="">
            <input type="text" className='city' placeholder='City' name='city' onChange={(e) => handleChange(e)} />
            <input type="text" className='country' placeholder='Country' name='country' onChange={(e) => handleChange(e)} />
            <div id='container'><button className='subBtn' onClick={(e) => weatherMain(e)}>Check Weather</button></div>
            <SayHi/>
            <CurrentTime/>

            

          </form>
          {weather.main !== undefined ? (
            <div className='weap'>
              <WeaApp main={weather} />
              {/* <CurrentTime/> */}

            
            </div>

          ) : null}
        </div>

      </div>
      <div>

      </div>

    </>
  )
}

export default WeApp







// import React ,{useState}from 'react'
// import './WeApp.css'
// import WeaApp from '../components/WeaApp'
// // import CurrentTime from './CurrentTime';


// const successCallback = (position) => {
//   const { latitude, longitude } = position.coords;
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`)
//     .then((res) => res.json())
//     .then((data) => setWeather(data));
// };

// const errorCallback = (error) => {
//   console.log(error);
// };



// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// function WeApp() {
//   const [Weather,setWeather] = useState([]);
//   const [form ,setform] =useState({
//     city : '',
//     country :'',
//   });

// const APIKEY ='47b8c411cbaefbb5c821ccfce0e210fa';
//  async function weatherMain(e){
//   e.preventDefault();
//   if(form.city ===''){
//     alert('Please Enter City location');
    
//   }else{
//    const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${form.city},${form.country}&APPID=${APIKEY}`)
//    .then((res)=>res.json());
//    console.log(data);
//    setWeather(data)
//   }
//  }


//  const handleChange =(e) =>{
//   let name =e.target.name;
//   let value = e.target.value;

//   if(name ==='city'){
//     setform({...form,city :value});
//   }else{
//     console.log("error");
//   }
//   if(name === 'country'){
//     setform({...form,country : value});
//   }
//  }
// //  console.log('ding',Weather)
//   return (
//     <>
//     <div className='weapp'>
//       {/* <span className='title'>My Wheather App</span> */}
//       <br />
//       <div className='whole' >
//       <form action="">
//         <input type="text" className='city' placeholder='City' name='city' onChange={(e)=>handleChange(e)} />
//         <input type="text"  className='country' placeholder='Country' name='country' onChange={(e) =>handleChange(e)} />
//          <div id='container'><button className='subBtn' onClick={(e)=>weatherMain(e)}>Check Weather</button></div>
         
//          {/* <input type="datetime-local" /> */}
         


//       </form>
//       {Weather.main !==undefined?(
//         <div>
//           <WeaApp main ={Weather}/>
//           {/* <CurrentTime/> */}
//         </div>
//       ):null}
//     </div>



//     </div>
//     <div>

//     </div>
    

//     </>
//   )
// }

// export default WeApp