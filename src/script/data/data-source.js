const baseUrl = "https://api.covid19api.com";

class DataSource {
  static async searchCountry(keyword) {
    return fetch(`${baseUrl}/total/country/${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if(responseJson) {
        return Promise.resolve(responseJson.slice(-1));
      }else {
        return Promise.reject(`${keyword} is not found`);
      }
    })
  };
}

export default DataSource;