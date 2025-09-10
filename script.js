/*
 * JavaScript Boilerplate for Form Validation Assignment
 * 
 * This JavaScript file is part of the Error Handling and Debugging assignment. 
 * Your task is to complete the functions with appropriate error handling, custom errors, 
 * and debugging statements as instructed.
 * 
 * Follow the TODO prompts and complete each section to ensure the form validation works as expected.
 * Use the debugging techniques discussed in the course articles to help identify and fix issues.
 */

document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();
    document.getElementById('resultMessage').textContent = '';

    try {
        console.log('Form submission started'); 
        
        validateForm();
        
        document.getElementById('resultMessage').textContent = 'Form submitted successfully!';
        document.getElementById('resultMessage').classList.remove('text-danger');
        document.getElementById('resultMessage').classList.add('text-success');
    } catch (error) {
        console.error('Validation error:', error);
        handleValidationError(error);
        document.getElementById('resultMessage').textContent = 'Form validation failed. Please fix the errors and try again.';
        document.getElementById('resultMessage').classList.add('text-danger');
    } finally {
        console.log('Validation attempt finished.');
    }
});

function clearErrors() {
    console.log('Clearing error messages')

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').valiue;
    const password = document.getElementById('password').valiue;
    const confirmPassword = document.getElementById('confirmPassword').valiue;

    console.log('Validating form', { name, email, password, confirmPassword }); 

    if (name.trim() === '') {
        throw new Error('Name is required');
    }

    if (!validateEmail(email)) {
        throw new Error('Inavlid email format');
    }

    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }

    if (password !== confirmPassword) {
        throw new Error('Password do not match');
    }

}

function validateEmail(email) {
    console.log('Validating email:', email);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleValidationError(error) {
    console.log('Handling validation error:', error.message);

    switch (error.message) {
        case 'Name is required':
            document.getElementById('nameError').textContent = error.message;
            break;
        // TODO: Add case for 'Invalid email format' error
        case 'Invalid email format':
            document.getElementById('emailError').textContent = error.message;
            break;

        case 'Password must be at least 8 characters long':
            document.getElementById('passwordError').textContent = error.message;
            break;
       
        case 'Password do not match':
            document.getElementById('confirmPasswordError').textContent = error.message;
            break;

        default:
            console.error('Unknown validation error:', error);
    }
}
