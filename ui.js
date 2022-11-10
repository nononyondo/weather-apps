// set current date
const currentDate = new Date()

class UI {
  constructor(){
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.date = document.getElementById('w-date')
    this.img = document.getElementById('w-icon')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.temperature = document.getElementById('w-temp')
    this.wind = document.getElementById('w-wind')
  }

  

  paint(weather){
    this.location.innerHTML = `<h2 class="city-name" data-name="${weather.name},${weather.sys.country}">
      <span>${weather.name}</span>
      <sup id="sup">${weather.sys.country}</sup>
    </h2>`
    this.desc.textContent = weather.weather[0].description
    this.date.innerHTML = `
      <h3 id="currentTime">${currentDate.toLocaleString()}</h3>
    `
    this.img.setAttribute('src', `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0].icon}.svg`)
    // this.img.setAttribute('src', weather.icon)
    // this.string.textContent = weather.temperature_string;
    // this.img.innerHTML = `
    //   <img id="w-icon" src="${weather.icon} >
    
    this.humidity.textContent = `Relative Humidity (%):  ${weather.main.humidity}`
    this.feelsLike.innerHTML = `Feels Like (<sup>o</sup>C):  ${weather.main.feels_like
}`
    this.temperature.innerHTML = `Temperature (<sup>o</sup>C):  ${weather.main.temp}`
    this.wind.textContent = `Wind (m/s):  ${weather.wind.speed}`

  }
}