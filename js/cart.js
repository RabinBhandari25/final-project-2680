function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(name) {
  let cart = getCart();
  cart = cart.filter(item => item.name !== name); // remove selected item
  saveCart(cart);
  renderCart(); // update UI
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = "0.00";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const row = document.createElement("div");
    row.classList.add("cart-item-row");

    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    row.innerHTML = `
      <div>${item.name}</div>
      <div>Qty: ${item.quantity}</div>
      <div>CAD ${itemTotal.toFixed(2)}</div>
      <button class="delete-btn" data-name="${item.name}">Delete</button>
    `;

    container.appendChild(row);
  });

  // Attach delete button events
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      removeFromCart(name);
    });
  });

  totalEl.textContent = total.toFixed(2);
}

renderCart();

document.getElementById("checkout-button").addEventListener("click", () => {
  localStorage.clear();
  alert("Payment done!");
  renderCart();
});
