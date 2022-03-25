class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://covid19.mathdro.id/api/countries/`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if(responseJson.countries) {
        return Promise.resolve(responseJson.countries)
      }
    })
  }
}