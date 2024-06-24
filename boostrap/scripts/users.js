let users = [
    {
        id: 1,
        email: 'germain@gmail.com',
        password: 'germaintest'
    },
    {
        id: 2,
        email: 'matig@hotmail.com',
        password: 'matiastest'
    },
    {
        id: 3,
        email: 'pelado@peladin.com',
        password: 'peladotest'
    },
];

function validEmail(email) {
    return email != '' && email.length > 4; //ajustar
}

function validPassword(password) {
    return password != '' && password.length > 4;
}

function login() {
    const datos = {
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value,
    };

    let userMatch = users.find(user => user.email === datos.email && user.password === datos.password);

    if (userMatch) {
        localStorage.setItem('logged', 'true');
        window.location.href = 'index.html';
        return;
    }

    localStorage.setItem('logged', 'false');
    alert("No existe el usuario ingresado");
}

function logout() {
    localStorage.setItem('logged', 'false');
    window.location.href = 'index.html';
}
