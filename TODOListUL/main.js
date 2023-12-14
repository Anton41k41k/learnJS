const taskListHigh = document.querySelector('.taskList__high')
const inputTextHigh = document.querySelector('.input__high');

const taskListMedium = document.querySelector('.taskList__medium')
const inputTextMedium = document.querySelector('.input__medium');

const taskListLow = document.querySelector('.taskList__low')
const inputTextLow = document.querySelector('.input__low');


function addTask() {

    if (inputTextHigh.value !== ""){
      taskListHigh.insertAdjacentHTML('beforeend', `<div class="task__high task"><label><input type="checkbox" class="check"><p>${inputTextHigh.value}</p><button class="deleteTask"></button></label></div>`);
      inputTextHigh.value = "";
    }

    if (inputTextMedium.value !== ""){

      taskListMedium.insertAdjacentHTML('beforeend', `<div class="task__high task"><label><input type="checkbox" class="check"><p>${inputTextMedium.value}</p><button class="deleteTask"></button></label></div>`);
      inputTextMedium.value = ""
    }

    if (inputTextLow.value !== ""){

      taskListLow.insertAdjacentHTML('beforeend', `<div class="task__high task"><label><input type="checkbox" class="check" onchange="checkBox; return false"><p>${inputTextLow.value}</p><button class="deleteTask"></button></label></div>`);
      inputTextLow.value = ""
    }
    return
}

function checkBox() {
  if (document.querySelector('.check').checked){
    document.querySelector('.task').style.backgroundColor = gray;
  }
}
