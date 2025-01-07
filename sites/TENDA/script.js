const loginForm = document.getElementById('loginForm');
const statusDiv = document.getElementById('status');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulate successful login (replace with actual authentication logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        statusDiv.textContent = 'Login successful!'; 
    } else {
        statusDiv.textContent = 'Invalid username or password.';
    }
});
