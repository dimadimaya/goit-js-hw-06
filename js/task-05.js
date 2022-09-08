const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", inputChange);
function inputChange(event) {
  output.textContent = event.currentTarget.value;
  if (output.textContent.length === 0) {
    output.textContent = "Anonymous";
  }
}
