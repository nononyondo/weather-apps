class Storage {
  constructor() {
      this.city;
      this.state;
      this.defaultCity = 'Cape Town';
      this.defaultState = 'WP'
  }

  getLocationData() {
    // get city data
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity
    } else {
      this.city = localStorage.getItem('city')
    }

    // get state data
     if(localStorage.getItem('state') === null){
      this.state = this.defaultState
    } else {
      this.state = localStorage.getItem('state')
    }

    return {
      city: this.city,
      state: this.state
    }

  }

  setLocationData(city, state){
    localStorage.setItem('city', city)
    localStorage.setItem('state', state)
  }
}