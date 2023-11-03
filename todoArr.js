const list = [
{ name: 'create a post', status: 'Done', priority: 'Low' },
{ name: 'learn JS', status: 'In progress', priority: 'High' },
{ name: 'play in computer', status: 'Done', priority: 'Low' },
{ name: 'make VKR', status: 'To Do', priority: 'High' },
] 

function changeStatus(task, status) {
  if ((index = list.findIndex(tasks => tasks.name == task)) >= 0){
    list.splice(index, (list[index].status = status));
    return;
  } else if ((index = list.findIndex(tasks => tasks.name == task)) < 0){
    console.log(`Задачи "${task}" нету в списке`);
  }
}

function changePriority(task, priority) {
  if ((index = list.findIndex(tasks => tasks.name == task)) >= 0){
    list.splice(index, (list[index].priority = priority));
    return;
  } else if ((index = list.findIndex(tasks => tasks.name == task)) < 0){
    console.log(`Задачи "${task}" нету в списке`);
  }
}

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
  const Done = [];
  const In_Progress = [];
  const ToDo = [];
  const high = [];
  const low = [];
  const medium = [];

  for (tasks of list){
   if (tasks.status == 'Done'){
    Done.push(tasks.name);
   }

   if (tasks.status == 'In progress'){
    In_Progress.push(tasks.name);
   }
  
   if (tasks.status == 'To Do'){
    ToDo.push(tasks.name);
   }
   
  }

  if (Done.length == 0){
    Done.unshift('-');
   }
  if (In_Progress.length == 0){
    In_Progress.unshift('-');
   }
  if (ToDo.length == 0){
    ToDo.unshift('-');
   }

  for (tasks of list){
   if (tasks.priority == 'High'){
    high.push(tasks.name);
   }

   if (tasks.priority == 'Medium'){
    medium.push(tasks.name);
   }
  
   if (tasks.priority == 'Low'){
    low.push(tasks.name);
   }
   
  }

  if (high.length == 0){
    high.unshift('-');
   }
  if (medium.length == 0){
    medium.unshift('-');
   }
  if (low.length == 0){
    low.unshift('-');
   }
  
  console.log(`Задачи по статусу.
Done: ${String(Done.join(', '))}.
In Progress: ${String(In_Progress.join(', '))}.
To Do: ${String(ToDo.join(', '))}.

Задачи по приоритету.
High: ${String(high.join(', '))}.
Medium: ${String(medium.join(', '))}.
Low: ${String(low.join(', '))}.
`);
}

showList();
