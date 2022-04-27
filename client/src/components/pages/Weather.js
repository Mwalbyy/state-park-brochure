import React, { useEffect, useState } from 'react'
import WeatherCard from '../WeatherCard'

export default function Weather() {
  const APIKey = "c9648bd67b02cb074a8cff7f4418e8ec"
  
  const [forecastData, setForecastData] = useState([])

  function renderForecast(forecast) {
    const forecastArray = []
    for (let i = 0; i < 5; i++) {
      const day = {
        key: i,
        temp: forecast.daily[i].temp.day,
        humidity: forecast.daily[i].humidity,
        description: forecast.daily[i].weather[0].main,
        picture: forecast.daily[i].weather[0].icon
      }
      forecastArray.push(day)
    }
    setForecastData(forecastArray)
  }

  // change laty and long to state park location
  let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=40.8482&lon=73.9976&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
  async function getWeatherData () {
    const response = await fetch(apiurl)
    const data = await response.json()
    renderForecast(data)
  }
  useEffect(() => {
    getWeatherData()
    
  },[])
  return (
    <>
      {forecastData.map((singleDay) => {
        return <WeatherCard weather={singleDay} key={singleDay.key}/>
      })}
    </> 
  )
}



