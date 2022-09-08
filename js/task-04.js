let counter = 0;
const decrement = document.querySelector("button[data-action=decrement]");
const increment = document.querySelector("button[data-action=increment]");
const value = document.querySelector("#value");

console.log(decrement);
console.log(increment);

const decr = function () {
  counter += 1;
  value.textContent = counter;
};

const incr = function () {
  counter -= 1;
  value.textContent = counter;
};

decrement.addEventListener("click", decr);
increment.addEventListener("click", incr);
