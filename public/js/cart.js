function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(name) {
  let cart = getCart();
  cart = cart.filter(item => item.name !== name); 
  saveCart(cart);
  renderCart(); // update UI
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (!container || !totalEl) return;

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

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      removeFromCart(name);
    });
  });

  totalEl.textContent = total.toFixed(2);
}


async function handleCheckout() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  try {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Stripe session error:", data);
      alert("Could not start checkout. Please try again.");
    }
    localStorage.clear
  } catch (err) {
    console.error("Network or server error:", err);
    alert("Error connecting to payment server.");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  const checkoutBtn = document.getElementById("checkout-button");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout);
  }
});
