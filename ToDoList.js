const list = {

  "create a new practice task": "In Progress",

  "make a bed": "Done",

  "write a post": "To Do", 

};

function changeStatus(task, status) {

 if (status == list[task]){

  console.log(`У "${task}" уже задан статус "${status}"`);

 } 
 
 else {

  list[task] = status;

 }

}

function addTask(task) {
  if (task in list) {
    console.log(`Задача "${task}" уже есть в списке дел`);
  } else{
    list[task] = "";
  }
}

function deleteTask(task){
  if (task in list) {
    delete list[task];
  } else {
    console.log("Вы неверно ввели задачу, либо ее не существует");
  }
    

}

function showList(ToDo, In_Process, Done) {

  if (Object.keys(list) == "ToDo"){
    ToDo = (Object.keys(list) == "ToDo");
  } else{
    ToDo = "-"
  }

  if (Object.values(list) === "In Process"){
    In_Process = Object.keys(list)
    return;
  } else{
    In_Process = "-"
  }

  if (Object.values(list) === "Done"){
    Done = (Object.values(list) === "Done")
    return;
  } else{
    Done = "-"
  }


  
  console.log(`ToDo: ${ToDo}, In Process: ${In_Process}, Done: ${Done}`)

}




changeStatus("write a post", "In Progress");

deleteTask("make a bed");

addTask("Выйти в окно");

changeStatus("Выйти в окно", "In Progress");

changeStatus("write a post", "In Progress");

showList();