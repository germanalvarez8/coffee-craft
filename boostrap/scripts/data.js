let products = [
    {
        id: 1,
        title: 'Bolivia Honey',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/bolivia-honey.jpg'
    },
    {
        id: 2,
        title: 'Colombia Geisha',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/bolivia.jpg'
    },
    {
        id: 3,
        title: 'Colombia Dragon',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/colombia-dragon.jpg'
    },
    {
        id: 4,
        title: 'Colombia Natural',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/colombia-natural.jpg'
    },
    {
        id: 5,
        title: 'Colombia',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/colombia.jpg'
    },
    {
        id: 6,
        title: 'Brasil Dark',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/brasil-dark.jpg'
    },
    {
        id: 7,
        title: 'Brasil',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: '/boostrap/images/brasil.jpg'
    }
]

function addToCart(element) {
    let shopCart = JSON.parse(localStorage.getItem('shopping_cart')) || [];
    let product = shopCart.find(item => item.id === element.dataset.id);

    if (product) {
        product.quantity += 1;
    } else {
        shopCart.push({
            id: element.dataset.id,
            name: element.dataset.name,
            quantity: 1
        });
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shopCart));
}