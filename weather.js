class Weather {
  constructor(city, state){
    this.apiKey = '84418d6e963bc21e24b0e10dbf607665';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.state}&appid=${this.apiKey}&units=metric`)

    const responseData = await response.json()

    // console.log(responseData)

    // return responseData.current_observation;
    return responseData
  }

  // Change weatehr Location
  changeLocation(city, state){
    this.city = city;
    this.state = state
  }
}