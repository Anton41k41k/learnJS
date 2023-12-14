
const namePerson = document.querySelector('.namePerson');
const serverUrl = 'https://api.genderize.io';
const answer = document.querySelector('.answer');
const answerText = document.querySelector('.answerText')

function getGender() {
  const url = `${serverUrl}?name=${namePerson.value}`;
  
  (async() => {
    
    let genderName = await fetch(url);
    
    let gender = await genderName.json();
    
    answerText.textContent = `${namePerson.value} is ${gender.gender}`;
  })()
}