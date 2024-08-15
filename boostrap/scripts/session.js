document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cart-content').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
    if (localStorage.getItem('logged') === 'true') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
        document.getElementById('cart-content').style.display = 'block';
    }
});