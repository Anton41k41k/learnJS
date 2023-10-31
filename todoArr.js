const list = [
{ name: 'create a post', status: 'In progress', priority: 'low' },
{ name: 'learn JS', status: 'In progress', priority: 'high' },
{ name: 'play in computer', status: 'Done', priority: 'low' },
{ name: 'make VKR', status: 'Done', priority: 'high' },
] 

function changeStatus(task, status) {
for (tasks of list){
  if (task in list) {
    list[task] = status;
  } else if (status == list[task]){
    console.log(`У "${task}" уже задан статус "${status}".`);
  } else {
    console.log(`Задачи "${task}" не существует, либо вы ввели не верное название.`);
  } 
}
  
}



function addTask(task) {
  list.push({ name: task, status: "To Do", priority: "low"})
}

function deleteTask(task){
let index = list.findIndex(tasks => tasks.name == task);
  for (tasks of list){
    list.splice(index, 1);
    return;
  }
}

deleteTask('learn JS')

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

console.log(`To Do: ${Object.keys(ToDo)}.
In Progress: ${Object.keys(In_Progress)}.
Done: ${Object.keys(Done)}.`);

}
console.log(list);