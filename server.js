// server.js
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // ✅ no raw key here

const app = express();

// Parse JSON body
app.use(express.json());

// Serve static files from /public
app.use(express.static("public"));

app.post("/create-checkout-session", async (req, res) => {
  try {
    const items = req.body.items || [];

    // items example: [{ name: "Chicken Momo", price: 12.99, quantity: 2 }, ...]
    const lineItems = items.map(item => ({
      price_data: {
        currency: "cad",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // $12.99 => 1299 cents
      },
      quantity: item.quantity,
    }));

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:3000/success.html",
      cancel_url: "http://localhost:3000/cancel.html",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
