const operations = {
  add: '+',
  multi: '*',
  subtract: '-',
};

let action = prompt('Выберите функцию(+, *, -):', '');
let a = prompt('Введите значение a');
let b = prompt('Введите значение b');

operations.ADDD = prompt('Введите значение');
delete operations.prompt("Что вы хотите удалить");
console.log(operations);

let c;

function calc(action, a, b) {
  
  a = Number(a);
  b = Number(b);

  switch (action) {
    case operations.add:
      c = a + b 
      break;

    case operations.multi:
      c = a * b 
      break;

    case operations.subtract:
      c = a - b 
      break;
  }
alert(c)
}
console.log(operations);

calc(action, a, b);


