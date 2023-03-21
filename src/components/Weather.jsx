import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Weather API Data vvvvvv
// 85d3665f16194806b1e202237230703 

// Openweather old/default API Data: vvvvvv
// dede7a4a009a8e66bd2a80d8502e5f08

// NEW API KEY: a83a67150173d031089bfab1221830bc

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=glendale&units=imperialappid=dede7a4a009a8e66bd2a80d8502e5f08


const Weather = () => {
  const [data, setData] = useState({})

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=burbank&units=imperial&appid=dede7a4a009a8e66bd2a80d8502e5f08'
  
  useEffect(() => {
   const interval = setInterval(() => {
       axios.get(url)
       .then(res => setData(res.data))
       .catch(err => console.log(err));
     }, 5000);
    

    return () => clearInterval(interval);
  },[]);

  return (
      <div className='box'>
        <h1>Burbank <span>Weather</span></h1>
        <div className='element'>
            <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt="weather" />
          <p><span>Temp: {data.main ? <span>{data.main.temp.toFixed()}°F</span> : null}</span></p>
          <p><span>Humidity: {data.main ? <span>{data.main.humidity}%</span> : null}</span></p>
          <p><span>Wind: {data.wind ? <span>{data.wind.speed.toFixed()} mph</span> : null}</span></p>
        </div>
      </div>
    )

  // const [apiData, setApiData] = useState()
  // const [search, setSearch] = useState("")
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q={search}&units=imperial&appid=dede7a4a009a8e66bd2a80d8502e5f08')
  //         const data = await res.json()
  //         console.log(data)
  //         if(res.ok){
  //           setApiData(data)  
  //         }
  //     }
  //     fetchData()
  // }, [search])
  
  // return (
  //   <div className='box'>
  //     <h1>Weather <span>Check</span></h1>
  //     <input type="text" name="search" placeholder='search city' onChange={(e)=>setSearch(e.target.value)} value={search} />
  //     {apiData? <div className='element'>
  //       <p><span>Temp: </span>{apiData.main.temp.toFixed()}</p>
  //     </div>
  //     : <h1>No Data Found</h1>}
  //   </div>
  // )
};

export default Weather;
