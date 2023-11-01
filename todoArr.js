const list = [
{ name: 'create a post', status: 'In progress', priority: 'low' },
{ name: 'learn JS', status: 'In progress', priority: 'high' },
{ name: 'play in computer', status: 'Done', priority: 'low' },
{ name: 'make VKR', status: 'Done', priority: 'high' },
] 

function changeStatus(name, status) {
    if (list.find(tasks => tasks.name == name) && list.find(tasks => tasks.status !== status)){
      list.find(tasks => tasks.status = status);
    } else if (list.find(tasks => tasks.name !== name)){
      console.log(`Задача "${name}" отсутстувет в списке дел`);
      return
    } else if (list.find(tasks => tasks.name == name) && (tasks => tasks.status == status)){
      console.log(`У задачи "${name}" уже задан статут "${status}"`);
    }
  }


changeStatus('learn JS', 'To Do');



function addTask(task) {
  if (list.find(tasks => tasks.name == task)){
    console.log(`Задача "${task}" уже сущетсвует`);
  } else {
    list.push({ name: task, status: "To Do", priority: "Приоритет не указан"})
  }
}

function deleteTask(task){
 if ((index = list.findIndex(tasks => tasks.name == task)) >= 0){
    list.splice(index, 1);
    return;
  } else {
    console.log(`Задача "${task}" уже отсутствует в списке, либо вы не верно указали задачу`);
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

console.log(`To Do: ${Object.keys(ToDo)}.
In Progress: ${Object.keys(In_Progress)}.
Done: ${Object.keys(Done)}.`);

}
console.log(list);