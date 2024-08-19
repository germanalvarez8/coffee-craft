let products = [
    {
        id: 1,
        title: 'Bolivia Honey',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/bolivia-honey.jpg',
        flag_image: '../images/bolivia-flag_140x140.jpeg',
        price: 10.00
    },
    {
        id: 2,
        title: 'Colombia Geisha',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/bolivia.jpg',
        flag_image: '../images/colombia-flag_140x140.jpeg',
        price: 20.00
    },
    {
        id: 3,
        title: 'Colombia Dragon',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/colombia-dragon.jpg',
        flag_image: '../images/colombia-flag_140x140.jpeg',
        price: 15.00
    },
    {
        id: 4,
        title: 'Colombia Natural',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/colombia-natural.jpg',
        flag_image: '../images/colombia-flag_140x140.jpeg',
        price: 12.15
    },
    {
        id: 5,
        title: 'Colombia',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/colombia.jpg',
        flag_image: '../images/colombia-flag_140x140.jpeg',
        price: 23.00
    },
    {
        id: 6,
        title: 'Brasil Dark',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/brasil-dark.jpg',
        flag_image: '../images/brasil-flag_140x140.jpeg',
        price: 30.00
    },
    {
        id: 7,
        title: 'Brasil',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        images: '/images/brasil.jpg',
        flag_image: '../images/brasil-flag_140x140.jpeg',
        price: 27.50
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
        console.log(element);
        shopCart.push({
            id: element.dataset.id,
            name: element.dataset.name,
            quantity: 1,
            price: element.dataset.price
        });
    }

    let cartCount = document.getElementById('cart-count');
    cartCount.textContent = shopCart.length;

    localStorage.setItem('shopping_cart_boostrap', JSON.stringify(shopCart));
}