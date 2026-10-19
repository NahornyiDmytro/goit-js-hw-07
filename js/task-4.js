const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const dataObject = {};

    // 1. Збираємо значення з FormData, одразу обрізаємо пробіли і записуємо в об'єкт
    formData.forEach((value, key) => {
        dataObject[key] = value.trim();
    });

    // 2. Використовуємо ті самі обрізані значення з об'єкта для валідації
    if (dataObject.email === '' || dataObject.password === '') {
        return alert('All form fields must be filled in');
    }

    // 3. Виводимо готовий об'єкт у консоль і очищаємо форму
    console.log(dataObject);
    loginForm.reset();
});
