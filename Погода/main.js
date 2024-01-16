import {toStorageFollow,toStorageNow, imgFilter} from "./module.js";

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
  const search = new Promise(async(resolve, reject) => {
    let cityTemp = await fetch(url);
    let temp = await cityTemp.json();
    resolve(temp);
  })

  search.then(temp => {
    return new Promise((resolve, reject) => {
      tempText.textContent = Math.round(temp.main.temp);
      cityNow.textContent = temp.name;

      imgFilter (temp.weather[0].description, imgCloud);
      toStorageNow(cityNow);
      resolve()
    })
    
  })
  
  .catch(error => {
    alert('ошибка');
    tempText.textContent = '-';
    cityNow.textContent = 'Ошибка!';
  });

  event.preventDefault();
}

function followCity() {
  if (listCity.childElementCount < 5){
    listCity.insertAdjacentHTML('afterbegin',  `<div class="list__element">
    <p class="name__town">${cityNow.textContent}</p>
    <button>
    <img class="deleteBtn" src="img/delete.png" alt="0">
    </button>
    </div>`);
  } else {
    alert('Список полный!');
  }

  toStorageFollow(listCity);
}

function getTemp(event) {
  if (event.target.tagName != 'P') {
    return;
  } else{
    const url = `${serverUrl}?q=${event.target.textContent}&appid=${apiKey}`;

    const search = new Promise(async(resolve, reject) => {
    let cityTemp = await fetch(url);
    let temp = await cityTemp.json();
    resolve(temp);
    })

    search.then(temp => {
      return new Promise((resolve, reject) => {
        tempText.textContent = Math.round(temp.main.temp);
        cityNow.textContent = temp.name;

        imgFilter (temp.weather[0].description, imgCloud);
        toStorageNow(cityNow);
        resolve()
      })
    
    })
  
    .catch(error => {
      alert('ошибка');
      tempText.textContent = '-';
      cityNow.textContent = 'Ошибка!';
    });
  }
}

function reloadPage() {
  const url = `${serverUrl}?q=${localStorage.getItem('city')}&appid=${apiKey}`;
  const search = new Promise(async(resolve, reject) => {
    let cityTemp = await fetch(url);
    let temp = await cityTemp.json();
    resolve(temp);
  })

  search.then(temp => {
    return new Promise((resolve, reject) => {
      tempText.textContent = Math.round(temp.main.temp);
      cityNow.textContent = temp.name;

      imgFilter (temp.weather[0].description, imgCloud);
      toStorageNow(cityNow);
      resolve()
    })
    
  })
  
  .catch(error => {
    alert('ошибка');
    tempText.textContent = '-';
    cityNow.textContent = 'Ошибка!';
  });
}

function deleteCity(event) {
  if (event.target.tagName != 'IMG') {
    return;
  } else {
    listCity.removeChild(event.target.parentNode.parentNode);
  }
  toStorageFollow(listCity);
}

document.addEventListener('submit', now);
followBtn.addEventListener('click', followCity);
listCity.addEventListener('click', getTemp);
listCity.addEventListener('click', deleteCity);

listCity.innerHTML = localStorage.getItem('follow');
reloadPage();