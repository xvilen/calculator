let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttontext = e.target.innerText;
    console.log(typeof buttontext);
    if (buttontext == "X") {
      buttontext = "*";
      screenValue+=buttontext
      screen.value = screenValue;
    }
     else if (buttontext == "C") {
        screenValue =''
        screen.value = screenValue;
    }
     else if (buttontext == "=") {
      screen.value = eval(screenValue)
    }
    else{
        screenValue +=buttontext
      screen.value = screenValue;
    }
  });
}
