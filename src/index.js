import './style.scss';
import { apiCalls } from './apiCalls';

window.onload = function initializePage() {
  let key = 'a50424f7c35e339cf565a9addc478655';
  let inputField = document.getElementById('city-input');
  let searchButton = document.getElementById('search-button');
  let pageContent = document.getElementById('content');
  searchButton.addEventListener('click', function(){
    let weatherPromise = apiCalls.getCountryWeather(inputField.value, key);
    weatherPromise.then(function(result){
      pageContent.innerHTML = result.cod;
    });
  });
};