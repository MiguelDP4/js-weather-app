export const apiCalls = (() => {
  const getCountryWeather = (countryName, apiKey) => {
    const weatherPromise = new Promise(((resolve, reject) => {
      const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&APPID=${apiKey}`;
      fetch(apiCall, { mode: 'cors' })
        .catch((weatherCatch) => {
          reject(Error(weatherCatch));
        })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.json());
          } else if (response.status === 404) {
            reject(Error('The city was not found'));
          }
        });
    }));
    return weatherPromise.then((weatherData) => weatherData).catch((weatherCatch) => weatherCatch);
  };

  return { getCountryWeather };
})();

export default apiCalls;
