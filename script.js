// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signUp');

    if (!signUpButton || !signInButton || !signInForm || !signUpForm) {
        console.warn('Missing one of: signUpButton, signInButton, signInForm, signUpForm');
        return;
    }

    signUpButton.addEventListener('click', function() {
        signUpForm.style.display = "block";
        signInForm.style.display = "none";
    });

    signInButton.addEventListener('click', function() {
        signInForm.style.display = "block";
        signUpForm.style.display = "none";
    });
});
// ...existing code...