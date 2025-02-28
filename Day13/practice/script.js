const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics", image: "laptop.jpg" },
    { id: 2, name: "Phone", price: 20000, category: "Electronics", image: "phone.jpg" },
    { id: 3, name: "T-Shirt", price: 500, category: "Clothing", image: "tshirt.jpg" },
    { id: 4, name: "Book", price: 300, category: "Books", image: "book.jpg" },
    { id: 5, name: "Watch", price: 1500, category: "Accessories", image: "watch.jpg" }
];

function displayProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    products.forEach(product => {
        list.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
}

displayProducts();

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

function goToCart() {
    window.location.href = "cart.html";
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let table = document.getElementById("cart-items");
    table.innerHTML = "";
    cart.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        </tr>`;
    });
}

displayCart();

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function purchase() {
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    displayCart();
}

function backToProducts() {
    window.location.href = "index.html";
}