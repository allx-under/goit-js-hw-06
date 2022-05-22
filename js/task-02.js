const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const elementsList = ingredients.map((item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  itemEl.classList.add("item");
  return itemEl;
});

function addItemsToHtml(items) {
  listEl.append(...items);
}


addItemsToHtml(elementsList);