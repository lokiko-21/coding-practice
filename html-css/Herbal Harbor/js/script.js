// SHOPPING CART
let cart = [];

document.querySelectorAll('.atc-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const drinkName = event.target.dataset.name;
        const drinkPrice = event.target.dataset.price;

        cart.push({ name: drinkName, price: drinkPrice });

        updateCartIcon();
    });
});

function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.innerHTML = '<img src="images/filled_cart.png" alt="Filled Shopping Cart Icon">' + cart.length;
}

document.getElementById('cart-icon').addEventListener('click', () => {
    displayCartContents();
});

function displayCartContents() {
    const cartContents = document.getElementById('cart-contents');
    cartContents.innerHTML = '';

    cart.forEach(item => {
        cartContents.innerHTML += `<div>${item.name} - $${item.price}</div>`;
    })

    cartContents.innerHTML += '<button id="checkout-button">Proceed to Checkout</button>';

    document.getElementById('checkout-button').addEventListener('click', () => {
        checkout();
    });
}

function checkout() {
    alert('Thank you for your order!');
    cart = [];
    updateCartIcon();
    document.getElementById('cart-contents').innerHTML = '';
}
