import React ,{useState}from 'react'
import './WeApp.css'
import WeaApp from '../components/WeaApp'



function WeApp() {
  const [Weather,setWeather] = useState([]);
  const [form ,setform] =useState({
    city : '',
    country :'',
  });

const APIKEY ='47b8c411cbaefbb5c821ccfce0e210fa';
 async function weatherData(e){
  e.preventDefault();
  if(form.city ===''){
    alert('Please Enter City location');

  }else{
   const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${form.city},${form.country}&APPID=${APIKEY}`)
   .then((res)=>res.json()).then((data)=>data.json);

   setWeather({data:data})
  }
 }

 const handleChange =(e) =>{
  let name =e.target.name;
  let value = e.target.value;

  if(name ==='city'){
    setform({...form,city :value});
  }else{
    console.log("error");
  }
  if(name === 'country'){
    setform({...form,country : value});
  }
 }
  return (
    <>
    <div className='weapp'>
      {/* <span className='title'>My Wheather App</span> */}
      <br />
      <form action="">
        <input type="text" className='city' placeholder='city' name='city' onChange={(e)=>handleChange(e)} />
        <input type="text"  className='country' placeholder='country' name='country' onChange={(e) =>handleChange(e)} />
         <button className='subBtn' onClick={(e)=>weatherData(e)}>Check Weather</button>


      </form>
      {Weather.data !==undefined?(
        <div>
          <WeaApp data ={Weather.data}/>
        </div>
      ):null}



    </div>
    
    
    
    </>
  )
}

export default WeApp