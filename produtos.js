function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'carrinho.html'; 
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    let total = 0;

    cartDiv.innerHTML = ''; 

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product-item');
        itemDiv.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;

     
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        itemDiv.appendChild(removeButton);
        cartDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); 
}

function goBack() {
    window.location.href = 'index.html';
}





if (window.location.pathname.endsWith('carrinho.html')) {
    loadCart();
}
