
const getWeather = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
      const data = await response.json()
      
    printing(data)

    } catch (err) {
        console.error(err)
    }
}

function printing(weatherData) {
   const weatherCont = document.createElement('div')
   weatherCont.classList.add('card')
   const date = new Date(weatherData.current.time).toLocaleString()
   weatherCont.innerHTML = `
   <h1>Today´s Weather</h1>
  <h2>${weatherData.current.temperature_2m} ${weatherData.current_units.temperature_2m}</h2>
  <h3>Wind speed: ${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}</h3>
  <h2>${weatherData.timezone}</h2>
  <h3>Last Updated: ${date}</h3>
   `
   console.log(weatherData)
   document.body.append(weatherCont)
}

getWeather();
// YOUR JS CODE HERE