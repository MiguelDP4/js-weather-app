import './style.scss';
import { apiCalls } from './apiCalls';
import { dom } from './dom';

window.onload = function initializePage() {
  const key = 'a50424f7c35e339cf565a9addc478655';
  const inputField = document.getElementById('city-input');
  const searchButton = document.getElementById('search-button');
  const pageContent = document.getElementById('content');
  const tScale = document.getElementById('t-scale');
  searchButton.addEventListener('click', () => {
    let temperatureScale;
    if (tScale.checked) {
      temperatureScale = '°F';
    } else {
      temperatureScale = '°C';
    }
    const weatherPromise = apiCalls.getCountryWeather(inputField.value, key);
    weatherPromise.then((result) => {
      if (result instanceof Error) dom.drawError(pageContent, `Error: ${result.message}`);
      else dom.drawWeather(pageContent, result, temperatureScale);
    });
  });

  inputField.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchButton.click();
    }
  });
};