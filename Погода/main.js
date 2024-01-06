import {toStorageFollow,toStorageNow} from "./module.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const cityName = document.querySelector('.search-input');
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f&units=metric';
const tempText = document.querySelector('.temp__text');
const cityNow = document.querySelector('.city__now');
const listCity = document.querySelector('.list__city');
const followBtn = document.querySelector('.followBtn');
const imgCloud = document.querySelector('.img__cloud');

function now(event) {
  const url = `${serverUrl}?q=${cityName.value}&appid=${apiKey}`;
  console.log(url);
  (async() => {
    
    let cityTemp = await fetch(url);
    
    let temp = await cityTemp.json();
    tempText.textContent = Math.round(temp.main.temp);
    
    cityNow.textContent = temp.name;
    
    switch (temp.weather[0].description) {
      case 'clear sky':
        imgCloud.src = './img/clouds/clearSky.png'
        break;

      case 'few clouds':
        imgCloud.src = './img/clouds/fewClouds.png'
        break;

      case 'scattered clouds':
        imgCloud.src = './img/clouds/scatteredClouds.png'
        break;

      case 'broken clouds':
      case 'overcast clouds':
        imgCloud.src = './img/clouds/brokenClouds.png'
        break;

      case 'light intensity drizzle':
      case 'drizzle':
      case 'light intensity shower rain':
      case 'shower rain':
      case 'heavy intensity shower rain':
      case 'ragged shower rain':
      case 'heavy intensity drizzle':
      case 'light intensity drizzle rain':
      case 'drizzle rain':
      case 'heavy intensity drizzle rain':
      case 'shower rain and drizzle':
      case 'heavy shower rain and drizzle':
      case 'shower drizzle':
      case 'shower rain':
        imgCloud.src = './img/clouds/showerRain.png'
        break;

      case 'light rain':
      case 'moderate rain':
      case 'heavy intensity rain':
      case 'very heavy rain':
      case 'extreme rain':
      case 'rain':
        imgCloud.src = './img/clouds/rain.png'
        break;

      case 'thunderstorm with light rain':
      case 'thunderstorm with rain':
      case 'thunderstorm with heavy rain':
      case 'light thunderstorm':
      case 'thunderstorm':
      case 'heavy thunderstorm':
      case 'ragged thunderstorm':
      case 'thunderstorm with light drizzle':
      case 'thunderstorm with drizzle':
      case 'thunderstorm with heavy drizzle':
        imgCloud.src = './img/clouds/thunderstorm.png'
        break;

      case 'freezing rain':
      case 'light snow':
      case 'snow':
      case 'heavy snow':
      case 'sleet':
      case 'light shower sleet':
      case 'shower sleet':
      case 'light rain and snow':
      case 'rain and snow':
      case 'light shower snow':
      case 'shower snow':
      case 'heavy shower snow':
        imgCloud.src = './img/clouds/snow.png'
        break;

      case 'mist':
      case 'smoke':
      case 'haze':
      case 'sand/dust whirls':
      case 'fog':
      case 'sand':
      case 'dust':
      case 'volcanic ash':
      case 'squalls':
      case 'tornado':
        imgCloud.src = './img/clouds/mist.png'
        break;
    }
    toStorageNow(tempText, imgCloud, cityNow)
    
  })()
  .catch(error => {
    alert('ошибка');
    tempText.textContent = '-';
    
    cityNow.textContent = 'Ошибка!';
  });
  event.preventDefault()
}

function followCity() {
  if (listCity.childElementCount < 5){
    listCity.insertAdjacentHTML('afterbegin',  `<div class="list__element">
    <p class="name__town">${cityNow.textContent}</p>
    <button>
    <img class="deleteBtn" src="img/delete.png" alt="0">
    </button>
    </div>`)
  } else alert('Список полный!')
  toStorageFollow(listCity)
}

function getTemp(event) {
  if (event.target.tagName != 'P') {
    return;
  } else{
    const url = `${serverUrl}?q=${event.target.textContent}&appid=${apiKey}`;
    (async() => {
      
      let cityTemp = await fetch(url);
      
      let temp = await cityTemp.json();
      tempText.textContent = Math.round(temp.main.temp);
      
      cityNow.textContent = temp.name;

      switch (temp.weather[0].description) {
      case 'clear sky':
        imgCloud.src = './img/clouds/clearSky.png'
        break;

      case 'few clouds':
        imgCloud.src = './img/clouds/fewClouds.png'
        break;

      case 'scattered clouds':
        imgCloud.src = './img/clouds/scatteredClouds.png'
        break;

      case 'broken clouds':
      case 'overcast clouds':
        imgCloud.src = './img/clouds/brokenClouds.png'
        break;

      case 'light intensity drizzle':
      case 'drizzle':
      case 'light intensity shower rain':
      case 'shower rain':
      case 'heavy intensity shower rain':
      case 'ragged shower rain':
      case 'heavy intensity drizzle':
      case 'light intensity drizzle rain':
      case 'drizzle rain':
      case 'heavy intensity drizzle rain':
      case 'shower rain and drizzle':
      case 'heavy shower rain and drizzle':
      case 'shower drizzle':
      case 'shower rain':
        imgCloud.src = './img/clouds/showerRain.png'
        break;

      case 'light rain':
      case 'moderate rain':
      case 'heavy intensity rain':
      case 'very heavy rain':
      case 'extreme rain':
      case 'rain':
        imgCloud.src = './img/clouds/rain.png'
        break;

      case 'thunderstorm with light rain':
      case 'thunderstorm with rain':
      case 'thunderstorm with heavy rain':
      case 'light thunderstorm':
      case 'thunderstorm':
      case 'heavy thunderstorm':
      case 'ragged thunderstorm':
      case 'thunderstorm with light drizzle':
      case 'thunderstorm with drizzle':
      case 'thunderstorm with heavy drizzle':
        imgCloud.src = './img/clouds/thunderstorm.png'
        break;

      case 'freezing rain':
      case 'light snow':
      case 'snow':
      case 'heavy snow':
      case 'sleet':
      case 'light shower sleet':
      case 'shower sleet':
      case 'light rain and snow':
      case 'rain and snow':
      case 'light shower snow':
      case 'shower snow':
      case 'heavy shower snow':
        imgCloud.src = './img/clouds/snow.png'
        break;

      case 'mist':
      case 'smoke':
      case 'haze':
      case 'sand/dust whirls':
      case 'fog':
      case 'sand':
      case 'dust':
      case 'volcanic ash':
      case 'squalls':
      case 'tornado':
        imgCloud.src = './img/clouds/mist.png'
        break;
    }
    toStorageNow(tempText, imgCloud, cityNow)
    })()
    .catch(error => {
      alert('ошибка');
      tempText.textContent = '-';
      
      cityNow.textContent = 'Ошибка!';
    });
  }
}

function deleteCity(event) {
  if (event.target.tagName != 'IMG') {
    return;
  } else listCity.removeChild(event.target.parentNode.parentNode);
  toStorageFollow(listCity)
}

document.addEventListener('submit', now);
followBtn.addEventListener('click', followCity);
listCity.addEventListener('click', getTemp);
listCity.addEventListener('click', deleteCity);

listCity.innerHTML = localStorage.getItem('follow');
tempText.textContent = localStorage.getItem('temp');
cityNow.textContent = localStorage.getItem('city');
imgCloud.src = localStorage.getItem('img');


