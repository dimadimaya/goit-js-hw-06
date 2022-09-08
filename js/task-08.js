const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;

  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("All fields must be filled");
  }
  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  console.log(formData);

  form.reset();
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);

//   formData.forEach((email, password) => {
//     console.log(email, password);
//   });
// }
