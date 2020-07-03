export const dom = (() => {
  const appendHtmlHeading = (parentElement, text, headingSize, classArray = null) => {
    const newHeading = document.createElement(`h${headingSize}`);
    if(classArray != null){
      for (let i = 0; i < classArray.length; i += 1) {
      newHeading.classList.add(classArray[i]);
      }
    }
    
    newHeading.innerHTML = text;
    parentElement.append(newHeading);
    return newHeading;
  };

  const appendHtmlImage = (parentElement, source, classArray = null) => {
    const newImage = document.createElement(`img`);
    if(classArray != null){
      for (let i = 0; i < classArray.length; i += 1) {
        newImage.classList.add(classArray[i]);
      }
    }
    newImage.src = source;
    parentElement.append(newImage);
    return newImage;
  };

  const appendHtmlDiv = (parentElement, classArray = null) => {
    const newDiv = document.createElement('div');
    if(classArray != null){
      for (let i = 0; i < classArray.length; i += 1) {
        newDiv.classList.add(classArray[i]);
      }
    }
    parentElement.append(newDiv);
    return newDiv;
  }

  const appendHtmlSpan = (parentElement, text, classArray = null) => {
    const newSpan = document.createElement('span');
    if(classArray != null){
      for (let i = 0; i < classArray.length; i += 1) {
        newImage.classList.add(classArray[i]);
      }
    }
    newSpan.innerHTML = text;
    parentElement.append(newSpan);
    return newSpan;
  }

  const drawWeather = (container, weatherData, temperatureScale) => {
    container.innerHTML = "";
    appendHtmlHeading(container, weatherData.name, 2, ['text-center']);
    appendHtmlSpan(container, weatherData.weather[0].description)
    appendHtmlImage(container, `../img/${weatherData.weather[0].icon}.svg`, ['w-75', 'h-auto']);
    let infoDiv = appendHtmlDiv(container, ['w-75', 'd-flex', 'flex-column']);
    let temperatureDiv = appendHtmlDiv(infoDiv, ['w-100', 'd-flex', 'flex-row', 'justify-content-between']);
    if(temperatureScale === '°C'){
      appendHtmlSpan(temperatureDiv, 'Temperature: ' + (weatherData.main.temp - 273.1).toFixed(2) + ' °C');
      appendHtmlSpan(temperatureDiv, 'Feels like: ' + (weatherData.main.feels_like - 273.1).toFixed(2) + ' °C');
    } else {
      appendHtmlSpan(temperatureDiv, 'Temperature: ' + ((weatherData.main.temp - 273.1) * 9 / 5 + 32).toFixed(2) + ' °F');
      appendHtmlSpan(temperatureDiv, 'Temperature: ' + ((weatherData.main.feels_like - 273.1) * 9 / 5 + 32).toFixed(2) + ' °F');
    }
  }

  return { drawWeather };
})();

export default dom;