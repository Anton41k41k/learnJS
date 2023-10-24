const list = {

  "create a new practice task": "In Progress",

  "make a bed": "Done",

  "write a post": "To Do", 

};

function changeStatus(task, status) {
 if (task !== task) 
  list[task] = status;

}

function addTask(task) {

    list[task] = "";

}

function deleteTask(task){

    delete list[task];

}

function showList() {

    console.log(list);

}




changeStatus("write a post", "In Progress");

deleteTask("make a bed");

addTask("Выйти в окно");

changeStatus("Выйти в окно", "In Progress");

showList();