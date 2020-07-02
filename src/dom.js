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
        newImage.classList.add(classArray[i]);
      }
    }
    parentElement.append(newDiv);
    return newDiv;
  }

  const drawWeather = (container, weatherData) => {
    container.innerHTML = "";
    console.log(weatherData);
    appendHtmlHeading(container, weatherData.name, 2, 'text-center');
    appendHtmlImage(container, `../img/${weatherData.weather[0].icon}.svg`, ['w-75', 'h-auto']);
  }

  return { drawWeather };
})();

export default dom;