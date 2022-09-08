const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls input");

btnCreate.addEventListener("click", getTheNumberOfBoxes);
btnCreate.addEventListener("click", afterClick);
btnDestroy.addEventListener("click", destroyBoxes);

function afterClick() {
  input.value = "";
}

function getTheNumberOfBoxes() {
  createBoxes(input.value);
}

function createBoxes(amount) {
  let sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${sizeBox}px`;
    newDiv.style.height = `${sizeBox}px`;
    sizeBox += 10;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(newDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
