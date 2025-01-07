loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        // Handle successful login (e.g., redirect to another page)
    } else {
        window.location.href = 'error.html'; 
    }
});
