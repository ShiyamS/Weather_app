/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "3f30b3ba0fe4270b03c215a679c6175f";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
    console.log(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}


/**
 * Show the weather data in HTML
 */
 

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp; 
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  
  let locationIcon = document.getElementById('weather-icon');
  let iconcode = weatherData.weather[0].icon;
  locationIcon.innerHTML =`<img src="icons/${iconcode}.png">`;
  // locationIcon.innerHTML =`<img src="http://openweathermap.org/img/wn/${iconcode}@2x.png">`;
  

}
