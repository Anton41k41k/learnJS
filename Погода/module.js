let storageFollowCity;
let currentCity;

export function toStorageFollow(object) {
  storageFollowCity = object.innerHTML;
  localStorage.setItem('follow', storageFollowCity);
}

export function toStorageNow(cityNow) {
  currentCity = cityNow.textContent;
  localStorage.setItem('city', currentCity);
}


