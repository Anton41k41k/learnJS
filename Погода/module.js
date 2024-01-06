let storageFollowCity;
let currentTemp;
let currentCity;
let currentImg;
const storageCurrentCity = {};

export function toStorageFollow(object) {
  storageFollowCity = object.innerHTML;
  localStorage.setItem('follow', storageFollowCity);
}

export function toStorageNow(tempText, imgCloud, cityNow) {
  currentTemp = tempText.textContent;
  currentImg = imgCloud.src;
  currentCity = cityNow.textContent;
  localStorage.setItem('temp', currentTemp);
  localStorage.setItem('img', currentImg);
  localStorage.setItem('city', currentCity);
}