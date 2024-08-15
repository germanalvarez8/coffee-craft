let products = [
    {
        id: 1,
        title: 'Bolivia Honey',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/bolivia-honey.jpg'
    },
    {
        id: 2,
        title: 'Colombia Geisha',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/bolivia.jpg'
    },
    {
        id: 3,
        title: 'Colombia Dragon',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/colombia-dragon.jpg'
    },
    {
        id: 4,
        title: 'Colombia Natural',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/colombia-natural.jpg'
    },
    {
        id: 5,
        title: 'Colombia',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/colombia.jpg'
    },
    {
        id: 6,
        title: 'Brasil Dark',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/brasil-dark.jpg'
    },
    {
        id: 7,
        title: 'Brasil',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/brasil.jpg'
    }
]

function addToCart(element) {
    let shopCart = JSON.parse(localStorage.getItem('shopping_cart_boostrap')) || [];
    let productExist = shopCart.find(item => item.id === element.dataset.id);

    if (productExist) {
        shopCart.forEach(product => {
            if (product.id == element.dataset.id) {
                product.quantity += 1;
            }
        });
    } else {
        shopCart.push({
            id: element.dataset.id,
            name: element.dataset.name,
            description: 'description',
            quantity: 1,
            price: 100
        });
    }

    let cartCount = document.getElementById('cart-count');
    cartCount.textContent = shopCart.length;

    localStorage.setItem('shopping_cart_boostrap', JSON.stringify(shopCart));
}