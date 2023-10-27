function showVerticalMessage(str) {

  if (str[0] === "s"){
    str = str[0].toUpperCase() + str.slice(1);
  }

  str = str.slice(0, 7);
  console.log(str);
  for (let vertStr of str){
   console.log(vertStr);
  }

}

showVerticalMessage("Say Hellooo");

