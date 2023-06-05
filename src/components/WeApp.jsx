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
 async function weatherMain(e){
  e.preventDefault();
  if(form.city ===''){
    alert('Please Enter City location');
    
  }else{
   const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${form.city},${form.country}&APPID=${APIKEY}`)
   .then((res)=>res.json());
   console.log(data);
   setWeather(data)
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
//  console.log('ding',Weather)
  return (
    <>
    <div className='weapp'>
      {/* <span className='title'>My Wheather App</span> */}
      <br />
      <form action="">
        <input type="text" className='city' placeholder='city' name='city' onChange={(e)=>handleChange(e)} />
        <input type="text"  className='country' placeholder='country' name='country' onChange={(e) =>handleChange(e)} />
         <button className='subBtn' onClick={(e)=>weatherMain(e)}>Check Weather</button>


      </form>
      {Weather.main !==undefined?(
        <div>
          <WeaApp main ={Weather}/>
        </div>
      ):null}
      // Data yoxdu main e gore ele 



    </div>
    
    
    
    </>
  )
}

export default WeApp