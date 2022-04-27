



const APIKey = "eeb5a4f4f32c1f7a190544a866cbdd0c"
let weatherURL = "https://api.openweathermap.org/";

let currentWeatherEl = document.querySelector("#current-weather")
let fiveDayForecastEl = document.querySelector("#five-day-forecast")



function renderCurrentWeather(weather) {

    let windspeed = weather.wind_speed
    let icon = weather.weather[0].icon
    let image = "http://openweathermap.org/img/w/" + icon + ".png";
    let tempF = weather.temp
    let humidity = weather.humidity
    let UvIndex = weather.uvi
  
    let card = document.createElement("div");
    let cardImg = document.createElement("img")
    let cardDate = document.createElement("h5")
    let cardTemp = document.createElement("p")
    let cardWind = document.createElement("p")
    let cardHumidity = document.createElement("p")
    let cardUvIndex = document.createElement("p")
    if (UvIndex < 2) {
      cardUvIndex.classList.add("uv-low")
    } if (UvIndex > 2 && UvIndex < 4) {
      cardUvIndex.classList.add("uv-med")
    } if (UvIndex > 4) {
      cardUvIndex.classList.add("uv-high")
    }

    // cardDate.textContent = moment().format("MM/DD/YYYY");
    cardTemp.textContent = "Current Temperature: " + tempF + " Degrees Farenheit"
    cardWind.textContent = "Current Windspeed: " + windspeed + " mph"
    cardHumidity.textContent = "Current Humidity: " + humidity + "%"
    cardUvIndex.textContent = "Current UV Index: " + UvIndex
  
    cardImg.setAttribute("src", image)
  
    card.append(cardImg, cardDate, cardTemp, cardWind, cardHumidity, cardUvIndex)
    currentWeatherEl.append(card)
}

function renderForecast(forecast) {
    for (let i = 1; i < 6; i++) {
      const singleDay = forecast[i];
  
      let date = singleDay.dt
      let icon = singleDay.weather[0].icon
      let image = "http://openweathermap.org/img/w/" + icon + ".png";
      let tempF = singleDay.temp.day
      let wind = singleDay.wind_speed
      let humidity = singleDay.humidity
  
      
      let card = document.createElement("div");
      let cardImg = document.createElement("img")
      let cardDate = document.createElement("h5")
      let cardTemp = document.createElement("p")
      let cardWind = document.createElement("p")
      let cardHumidity = document.createElement("p")
  
      // cardDate.textContent = moment.unix(date).format("MM/DD/YYYY");
      cardTemp.textContent = "Temperature: " + tempF + "Deg"
      cardWind.textContent = "Windspeed: " + wind + " mph"
      cardHumidity.textContent = "Humidity: " + humidity + "%"
  
      cardImg.setAttribute("src", image)
  
      card.append(cardImg, cardDate, cardTemp, cardWind, cardHumidity)
      fiveDayForecastEl.append(card)
    }
}

function renderWeather(city, data) {
    renderCurrentWeather(city, data.current, data.timezone);
    renderForecast(data.daily, data.timezone);
  }

  function fetchWeather(location) {
    let city = location.name
    let apiurl = `${weatherURL}data/2.5/onecall?lat=40.8482°N&lon=73.9976°W&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
    
    fetch(apiurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(city, data)
        renderWeather(city, data)
  
      })
      .catch(function (err) {
        console.error(err);
      });
  
  }

fetchWeather([0])