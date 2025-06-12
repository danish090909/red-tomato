const menu = {
    1: { name: "Jenan's Cheeseburger", price: 7.99, img: "jn.png" },
    2: { name: "Jenan's Animal Fries", price: 6.00, img: "af.png" },
    3: { name: "Jenan's Vanila Coke", price: 2.99, img: "vc.png" },
    4: { name: "Jenan's Combo Meal", price: 19.99, img: "cbmm.png" },
    5: { name: "Jenan's Chicken Burger", price: 8.99, img: "cbmmmm.png" },
    6: { name: "Jenan's Veggie Burger", price: 6.99, img: "vb.png" },
    7: { name: "Jenan's Spicy Chicken Burger", price: 9.99, img: "scb.png" },
    8: { name: "Jenan's Fish and Shells Burger", price: 8.49, img: "fb.png" },
    9: { name: "Jenan's Chicken Fries", price: 5.99, img: "cf.png" },
    10: { name: "Jenan's Onion Rings", price: 4.49, img: "or.png" },
    11: { name: "Jenan's Cranberry Milkshake", price: 3.99, img: "cbm.png" },
    12: { name: "Jenan's Coleslaw", price: 5.49, img: "cs.png" },
    13: { name: "Jenan's BlueCheese Macaroni", price: 4.99, img: "bcm.png" },
    14: { name: "Jenan's Chocolate Milkshake", price: 3.49, img: "cm.png" },
    15: { name: "Jenan's Strawberry Milkshake", price: 3.49, img: "sm.png" }
};

let order = [];

function addToOrder(itemId) {
    const quantity = parseInt(document.getElementById(`qty-${itemId}`).value);
    if (!quantity || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    const item = menu[itemId];
    const itemTotal = item.price * quantity;

    order.push({ name: item.name, quantity, total: itemTotal });
    alert(`${item.name} x${quantity} added to order.`);
}

function showOrder() {
    const summary = document.getElementById("order-summary");
    summary.innerHTML = "";

    if (order.length === 0) {
        summary.innerHTML = "<p>Your order is empty.</p>";
    } else {
        let totalCost = 0;
        order.forEach(item => {
            const line = document.createElement("p");
            line.textContent = `${item.name} x${item.quantity} - $${item.total}`;
            summary.appendChild(line);
            totalCost += item.total;
        });

        const totalLine = document.createElement("p");
        totalLine.innerHTML = `<strong>Total: $${totalCost}</strong>`;
        summary.appendChild(totalLine);
    }

    document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("orderModal");
    const closeBtn = modal.querySelector(".close");

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});