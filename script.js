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
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages and result message
    clearErrors();
    document.getElementById('resultMessage').textContent = '';

    try {
        console.log('Form submission started'); // Console debugging simple message
        // Validate the form
        validateForm();
        
        // If no errors, display success message
        document.getElementById('resultMessage').textContent = 'Form submitted successfully!';
        document.getElementById('resultMessage').classList.remove('text-danger');
        document.getElementById('resultMessage').classList.add('text-success');
    } catch (error) {
        console.error('Validation error:', error); // Console debugging message name with error
        handleValidationError(error);
        document.getElementById('resultMessage').textContent = 'Form validation failed. Please fix the errors and try again.';
        document.getElementById('resultMessage').classList.add('text-danger');
    } finally {
        // TODO: Add console debugging for 'Validation attempt finished.'
    }
});

// Function: Clear Previous Error Messages
function clearErrors() {
    // TODO: Add console debugging for 'Clearing error messages'
    // Clear error from nameError on form
    document.getElementById('nameError').textContent = '';
    // TODO: Clear error from emailError on form
    
    // TODO: Clear error from passwordError on form

    // TODO: Clear error from confirmPasswordError on form
}

// Function: Validate Form Data
function validateForm() {
    // Assign input values to variables
    const name = document.getElementById('name').value;
    // TODO: Assign value to email variable

    // TODO: Assign value to password variable

    // TODO: Assign value to confirmPassword variable

    console.log('Validating form', { name, email, password, confirmPassword }); // Console debugging with multiple values

    // Validate name field
    if (name.trim() === '') {
        throw new Error('Name is required');
    }

    // TODO: Validate email field using validateEmail function and throw error if invalid

    // TODO: Validate password length and throw error if less than 8 characters

    // TODO: Validate if password and confirmPassword match and throw error if they do not
}

// Function: Custom Email Validation
function validateEmail(email) {
    // TODO: Add console debugging for 'Validating email:' and the email value
    // Regular expression to check email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function: Display Validation Errors
function handleValidationError(error) {
    // TODO: Add console debugging for 'Handling validation error:' and the error message
    // Display specific error messages
    switch (error.message) {
        case 'Name is required':
            document.getElementById('nameError').textContent = error.message;
            break;
        // TODO: Add case for 'Invalid email format' error

        // TODO: Add case for 'Password must be at least 8 characters long' error

        // TODO: Add case for 'Passwords do not match' error

        default:
            // TODO: Add console.error() debugging for 'Unknown validation error:' and the error value
    }
}
