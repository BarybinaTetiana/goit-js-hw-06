const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElems = event.currentTarget.elements;

    const email = formElems.email.value;
    const password = formElems.password.value;

    const formData = {
        email,
        password,
    };

    if (email === '' || password === '') {
        alert('Усі поля повинні бути заповнені!');
    };

    console.log(formData);

    form.reset();
};





