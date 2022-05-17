const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients")


function createItemsList(items) {
  items.forEach((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    itemEl.classList.add("item");
    listEl.append(itemEl);
  })
};

createItemsList(ingredients);