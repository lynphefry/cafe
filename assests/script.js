
function welcomeMessage() {
    alert("☕ Welcome to Urban Café!\nFresh coffee brewed with love ❤️");
}

/* ===== 3. SPECIAL COFFEE ROTATOR ===== */
function changeText() {
    const specials = [
        "☕ Today's Special: Caramel Latte",
        "🔥 Espresso Shot – Strong & Bold!",
        "🍫 Chocolate Mocha Delight",
        "❄️ Refreshing Iced Coffee",
        "🥛 Creamy Cappuccino Bliss"
    ];

    const random = Math.floor(Math.random() * specials.length);

    document.getElementById("special").innerText = specials[random];
}


/* ===== 4. ORDER SYSTEM (BASIC CART ALERT) ===== */
function orderCoffee(name) {
    alert("☕ " + name + " added to your order!");

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(name);
    localStorage.setItem("orders", JSON.stringify(orders));
}


/* ===== 5. CONTACT FORM HANDLING ===== */
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;

        alert("Thanks " + name + "! We received your message ☕");

        form.reset();
    });
}


/* ===== 6. SHOW ORDERS (OPTIONAL FEATURE) ===== */
function showOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        alert("No orders yet ☕");
    } else {
        alert("Your Orders:\n\n" + orders.join("\n"));
    }
}

