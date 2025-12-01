






function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
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
      `;
  
      container.appendChild(row);
    });
  
    totalEl.textContent = total.toFixed(2);
  }
  
  renderCart();


  document.getElementById("checkout-button").addEventListener("click", ()=> {
    localStorage.clear()
    alert("payment done")
    renderCart()
  })
  
  
//   document.getElementById("checkout-button").addEventListener("click", async () => {
//     const cart = getCart();
  
//     if (cart.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }
  
//     try {
//         const res = await fetch("https://localhost:4245/create-checkout-session", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ items: cart })
//           });
          
  
//       const data = await res.json();
  
//       if (data.id) {
//         const result = await stripe.redirectToCheckout({ sessionId: data.id });
//         if (result.error) {
//           alert(result.error.message);
//         }
//       } else {
//         alert("Something went wrong creating the checkout session.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Unable to start checkout.");
//     }
//   });
  