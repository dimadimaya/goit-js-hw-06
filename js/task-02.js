const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
console.log(ingredients);

const ingredientsEl = document.querySelector("ul#ingredients");

const elements = ingredients.map((ingredient) => {
  const listElelements = document.createElement("li");
  listElelements.textContent = ingredient;
  listElelements.classList.add("item");
  return listElelements;
});

console.log(elements);

ingredientsEl.append(...elements);

console.log(ingredientsEl);

// const ingridientsArr = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingridient = ingredients[i];

//   const liEl = document.createElement("li");
//   liEl.textContent = ingridient;
//   liEl.classList.add("item");
//   ingridientsArr.push(liEl);
//   console.log(liEl);
// }

// ingredientsEl.append(...ingridientsArr);
// console.log(ingredientsEl);
