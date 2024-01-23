const select = document.getElementById('select');
const resultButton = document.getElementById('getResult');
const result = document.getElementById('result');
const resultList = document.querySelector('.resultList');

resultButton.addEventListener('click', getResult);
resultList.addEventListener('click', deleteResult);


function getResult() {
  const firstNumber = Number(document.getElementById('firstNumber').value);
  const secondNumber = Number(document.getElementById('secondNumber').value);

  if (select.value === "+"){
    result.textContent = firstNumber + secondNumber;
  }
  if (select.value === "-"){
    result.textContent = firstNumber - secondNumber;
  }
  if (select.value === "*"){
    result.textContent = firstNumber * secondNumber;
  }
  if (select.value === "/"){
    result.textContent = firstNumber / secondNumber;
  }
  resultList.insertAdjacentHTML('beforeend', `<div class = 'resultList_element'>${result.textContent}</div>`);
  return;
}

function deleteCity(event) {
  resultList.removeChild(event.target);
}