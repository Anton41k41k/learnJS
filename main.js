const firstNumber = +document.getElementById('firstNumber').value;
const secondNumber = +document.getElementById('secondNumber').value;
const select = document.getElementById('select');
const resultButton = document.getElementById('getResult');
const result = document.getElementById('result');

function getResult() {
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

}
resultButton.addEventListener('click', getResult);