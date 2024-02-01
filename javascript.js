document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      const usernameValue = document.getElementById('username').value.trim();
      const emailValue = document.getElementById('email').value.trim();
      const passwordValue = document.getElementById('password').value.trim();
      const confirmPasswordValue = document.getElementById('confirmPassword').value.trim();
  
      document.getElementById('usernameError').textContent = validateUsername(usernameValue);
      document.getElementById('emailError').textContent = validateEmail(emailValue);
      document.getElementById('passwordError').textContent = validatePassword(passwordValue);
      document.getElementById('confirmPasswordError').textContent = validateConfirmPassword(passwordValue, confirmPasswordValue);
    }
  
    function validateUsername(username) {
      if (username === '') {
        return 'Username is needed';
      }
      return '';
    }
  
    function validateEmail(email) {
      if (email === '') {
        return 'Email-id is needed';
      } else if (!isValidEmail(email)) {
        return 'Invalid email-id';
      }
      return '';
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validatePassword(password) {
      if (password === '') {
        return 'Password is needed';
      } else if (password.length < 6) {
        return 'Password should be 6 characters';
      }
      return '';
    }
  
    function validateConfirmPassword(password, confirmPassword) {
      if (confirmPassword === '') {
        return 'Confirm password is needed';
      } else if (password !== confirmPassword) {
        return 'Passwords not matched';
      }
      return '';
    }
  });
  