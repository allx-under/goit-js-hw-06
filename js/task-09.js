function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorBtn = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

const bodyEl = document.body;

changeColorBtn.addEventListener('click', displayChangedColor);

function displayChangedColor(color) {
  color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorName.textContent = color;
};

