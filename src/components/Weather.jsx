import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

};

export default Weather;
