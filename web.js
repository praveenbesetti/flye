const form = document.querySelector('.form');

function closeForm() {
    form.classList.remove('display');
}

function displayForm() {
    form.classList.add('display');
}

function validateForm() {

    resetErrors();

    const email = document.getElementById('email').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const check = document.getElementById('check').checked;

    let isValid = true;

    // Regular expressions
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z]+$/;

    // Validate email
    if (email === '') {
        displayError('emailError', 'Please enter a valid email.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        displayError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate first name
    if (firstName === '') {
        displayError('firstNameError', 'Please enter valid first name.');
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        displayError('firstNameError', 'Please enter a valid first name (only letters).');
        isValid = false;
    }

    // Validate last name
    if (lastName === '') {
        displayError('lastNameError', 'Please enter valid last name.');
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        displayError('lastNameError', 'Please enter a valid last name (only letters).');
        isValid = false;
    }

    // Validate checkbox
    if (!check) {
        displayError('checkError', 'Please agree to the terms and conditions.');
        isValid = false;
    }

    // If form is valid, proceed with submission
    if (isValid) {

        document.getElementById('contactForm').reset();
        closeForm();
        showNotification() // Hide the form after submission
    }

    function displayError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }

    function resetErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    function showNotification() {
        const notification = document.getElementById('notification');
        notification.style.display = 'block';

        // Hide the notification after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1500);
    }
}