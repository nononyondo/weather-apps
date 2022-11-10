// Init strorage object
const storage = new Storage()
// get stored location data
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)

// Init UI object
const ui = new UI()

// weather.changeLocation('Miami', 'FL')

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value

  weather.changeLocation(city, state)

  // Set Location in LS
  storage.setLocationData(city, state)

  // Get and display weather
  getWeather()

  // close modal
  $('#locModal').modal('hide')
  

})

// Get weather function
function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results)
      console.log(results);
    })
    .catch(err => console.log(err))
}
