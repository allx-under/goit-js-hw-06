const form = document.querySelector(".login-form");

form.addEventListener('submit',checkForm)

function checkForm(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("All fields should be filled out");
    };
    
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
