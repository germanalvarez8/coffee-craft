if (document.getElementById('toggleLoginRegister')) {
    document.getElementById('toggleLoginRegister').addEventListener('click', function(event) {
        event.preventDefault();

        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const toggleText = document.getElementById('toggleLoginRegisterText');

        if (registerForm.style.display === 'none') {
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
            toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleLoginRegister" class="mdl-button mdl-js-button mdl-button--primary">Log In</a>';
        } else {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleLoginRegister" class="mdl-button mdl-js-button mdl-button--primary">Sign Up</a>';
        }

        document.getElementById('toggleLoginRegister').addEventListener('click', arguments.callee);
    });
}

// Validate email
function validEmail(email) {
    return email !== '' && email.includes('@');
}

// Validate password
function validPassword(password) {
    return password !== '' && password.length > 4;
}

// Register a new user
function register() {
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    if (!validEmail(newEmail)) {
        alert("Invalid email");
        return;
    }
    if (!validPassword(newPassword)) {
        alert("Password must be at least 5 characters long");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === newEmail)) {
        alert("Email already registered");
        return;
    }

    users.push({
        id: users.length + 1,
        email: newEmail,
        password: newPassword
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! You can now log in.");

    document.getElementById('toggleLoginRegister').click();
}

// Log in
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userMatch = users.find(user => user.email === email && user.password === password);

    if (userMatch) {
        localStorage.setItem('logged', 'true');
        window.location.href = 'index.html';
        return;
    }

    localStorage.setItem('logged', 'false');
    alert("Invalid email or password");
}

// Log out
function logout() {
    localStorage.setItem('logged', 'false');
    window.location.href = 'login.html';
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('logged') === 'true') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }
});

const eyes = document.querySelectorAll('.eye');
const passwordInput = document.getElementById('password');

document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 30;
    const y = (event.clientY / window.innerHeight - 0.5) * 30;

    eyes.forEach(eye => {
        eye.style.transform = `translate(${x}px, ${y}px)`;
    });
});

if (passwordInput) {
    passwordInput.addEventListener('focus', () => {

        eyes.forEach(eye => {
            eye.setAttribute('rx', '9'); // Definimos el ancho de la elipse
            eye.setAttribute('ry', '1'); // Definimos la altura mínima de la elipse
        });
    });

    passwordInput.addEventListener('blur', () => {
        // Restaurar los ojos a círculos
        eyes.forEach(eye => {
            eye.setAttribute('rx', '9'); // Restaurar el ancho original del círculo
            eye.setAttribute('ry', '9'); // Restaurar la altura original del círculo
        });
    });
}
