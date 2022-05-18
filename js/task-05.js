const inputName = document.querySelector("#name-input");

const greetName = document.querySelector("#name-output");

inputName.addEventListener('input', (event) => greetName.textContent = event.currentTarget.value);

