const amount = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${amount}`);

const titleElelements = document.querySelectorAll("h2");
for (let element of titleElelements) {
  console.log("Category:", element.textContent);
  console.log("Elements:", element.nextElementSibling.children.length);
}
