function onLogin(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorEl = document.getElementById('error');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation
  if (!username || !password) {
    errorEl.textContent = "Required fields";
    return;
  }

  // Success case
  errorEl.textContent = "Login Successful!";
  
  // Reset form
  usernameInput.value = '';
  passwordInput.value = '';
}
