export const apiCalls = (() => {
  const getCountryWeather = (countryName, apiKey) => {
    const weatherPromise = new Promise(function(resolve, reject){
      let apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${countryName}&APPID=${apiKey}`;
      fetch(apiCall, {mode:'cors'})
      .catch(function(weatherCatch){
        // console.log(weatherCatch);
      })
      .then(function(response){
        if(response.status == 200){
          resolve(response.json());
        } else {
          if(response.status == 404){
            // console.log('theres an error');
            reject(Error(response.json()));
          }
        }
      });
    });
    return weatherPromise.then(function(weatherData){
      // console.log("Weather data",weatherData);
      return weatherData;
    }).catch(function(weatherCatch){
      return weatherCatch;
    });
  };

  return { getCountryWeather };
})();

export default apiCalls;
