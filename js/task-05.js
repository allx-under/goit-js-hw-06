const inputName = document.querySelector("#name-input");

const greetName = document.querySelector("#name-output");

inputName.addEventListener('input', (event) => {
    const inputText = event.currentTarget.value
    greetName.textContent = inputText;
    if (inputText.length === 0) {
        greetName.textContent = "Anonymous"
    }
});

