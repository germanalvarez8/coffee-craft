document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('cart-content')) {
        document.getElementById('cart-content').style.display = 'none';
    }

    if (document.getElementById('login') || document.getElementById('logout')) {
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    }

    if (localStorage.getItem('logged') === 'true') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
        document.getElementById('cart-content').style.display = 'block';
    }
});