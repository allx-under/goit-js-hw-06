const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length > inputEl.dataset.length) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
    if (inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
})
