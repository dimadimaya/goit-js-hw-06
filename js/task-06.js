const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (Number(input.getAttribute("data-length")) === input.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
