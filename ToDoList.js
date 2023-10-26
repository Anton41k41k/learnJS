const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do", 
};

function changeStatus(task, status) {
  if (task in list) {

    list[task] = status;

 } else if (status == list[task]){

  console.log(`У "${task}" уже задан статус "${status}".`);

 } else {

  console.log(`Задачи "${task}" не существует, либо вы ввели не верное название.`);

 } 

}

function addTask(task) {
  if (task in list) {
    console.log(`Задача "${task}" уже есть в списке дел.`);
  } else{
    list[task] = "";
  }
}

function deleteTask(task){
  if (task in list) {
    delete list[task];
  } else {
    console.log("Вы неверно ввели задачу, либо ее не существует.");
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

if (!Object.keys(ToDo).length){
    ToDo["-"] = '-';
  }
if (!Object.keys(In_Progress).length){
    In_Progress["-"] = '-';
  }
if (!Object.keys(Done).length){
    Done["-"] = '-';
  }

console.log(`ToDo: ${Object.keys(ToDo)}, In_Progress: ${Object.keys(In_Progress)}, Done: ${Object.keys(Done)}`);

}

changeStatus("write a posd", "Done");
changeStatus("make a bed", "To Do");
changeStatus("create a new practice task", "To Do");

showList();