const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in');
    }

    const formData = new FormData(loginForm);
    const dataObject = {};

    formData.forEach((value, key) => {
        dataObject[key] = value.trim();
    });

    console.log(dataObject);

    loginForm.reset();
});
