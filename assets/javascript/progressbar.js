// progress circular bar
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");
let num4 = document.getElementById("number4");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(() => {
  if (counter1 == 80) {
    clearInterval();
  } else {
    counter1 += 1;
    num1.innerHTML = counter1 + "%";
  }
}, 25);

setInterval(() => {
  if (counter2 == 80) {
    clearInterval();
  } else {
    counter2 += 1;
    num2.innerHTML = counter2 + "%";
  }
}, 25);

setInterval(() => {
  if (counter3 == 30) {
    clearInterval();
  } else {
    counter3 += 1;
    num3.innerHTML = counter3 + "%";
  }
}, 65);

setInterval(() => {
  if (counter4 == 20) {
    clearInterval();
  } else {
    counter4 += 1;
    num4.innerHTML = counter4 + "%";
  }
}, 95);
