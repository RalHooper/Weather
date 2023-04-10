import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [apiData, setApiData] = useState()
  const [search, setSearch] = useState("")

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=burbank&units=imperial&appid=dede7a4a009a8e66bd2a80d8502e5f08'
  
  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=dede7a4a009a8e66bd2a80d8502e5f08`)
        const data = await res.json()
        console.log(data);
        if(res.ok){
          setApiData(data)
        }
      }
      fetchData()
  }, [search])

  return (
      <div className='box'>
        <h1>Weather <span>Check</span></h1>
        <div className="search">
          <input 
            type="text" 
            name="search" 
            placeholder='search' 
            onChange={(e)=>setSearch(e.target.value)} 
            value={search} 
          />
        </div>
        {apiData? <div className='bottom'>
            <img src={"http://openweathermap.org/img/w/" + apiData.weather[0].icon + ".png"} alt="weather" />
          <p><span>Temp: </span> {apiData.main.temp.toFixed()}°F</p>
          <p><span>Humidity: </span> {apiData.main.humidity.toFixed()}%</p>
          <p><span>Wind: </span> {apiData.wind.speed.toFixed()} mph</p>
          <p>{apiData.name}</p>
        </div>
        : <h1>No data found.</h1>}
      </div>
    )

};

export default Weather;
