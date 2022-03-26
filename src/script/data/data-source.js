import covid from "./covid.js";

class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://api.covid19api.com/total/country/${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      const index = responseJson.length - 1;
      if(responseJson) {
        console.log(responseJson[index]);
        return Promise.resolve(responseJson[index]);
      }else {
        return Promise.reject(`${keyword} is not found`)
      }
    })
  }
}

export default DataSource;