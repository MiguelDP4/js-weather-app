import './style.scss';
import { apiCalls } from './apiCalls';
import { dom } from './dom';

window.onload = function initializePage() {
  let key = 'a50424f7c35e339cf565a9addc478655';
  let inputField = document.getElementById('city-input');
  let searchButton = document.getElementById('search-button');
  let pageContent = document.getElementById('content');
  let tScale = document.getElementById('t-scale');
  searchButton.addEventListener('click', function(){
    let temperatureScale;
    if(tScale.checked){
      temperatureScale = '°F';
    } else {
      temperatureScale = '°C';
    }
    let weatherPromise = apiCalls.getCountryWeather(inputField.value, key);
    weatherPromise.then(function(result){
      dom.drawWeather(pageContent, result, temperatureScale);
    });
  });

  inputField.addEventListener('keyup', function(event){
    if(event.keyCode === 13) {  
      event.preventDefault();
      searchButton.click();
    }
  });

};