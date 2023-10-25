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

function showList() {
  let ToDo = {};
  let In_Progress = {};
  let Done = {};

for (key in list){
  if (list[key] == "To Do"){
    ToDo[key] = key;
  }

  if (list[key] == "In Progress"){
    In_Progress[key] = key;
  } 

  if (list[key] == "Done"){
    Done[key] = key;
  } 
}
console.log(`ToDo: ${Object.keys(ToDo)}, In_Progress: ${Object.keys(In_Progress)}, Done: ${Object.keys(Done)}`);
}

changeStatus("write a post", "In Progress");
deleteTask("make a bed");
addTask("Выйти в окно");
changeStatus("Выйти в окно", "In Progress");
changeStatus("write a post", "In Progress");
changeStatus("write a post", "Done");
addTask("play in Dota 2");
changeStatus("play in Dota 2", "To Do") 

showList();