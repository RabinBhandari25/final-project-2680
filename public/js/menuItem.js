const menu = [
  {
    section: "Veg Appetizers",
    items: [
      {
        name: "Himalayan Fries",
        description: "Regular fries seasoned with Nepali spices.",
        price: 1.0
      },
      {
        name: "Veg Spring Roll (6 pcs)",
        description: "Crispy vegetable spring rolls (6 pieces).",
        price: 10.0
      },
      {
        name: "Papadum (2 pcs)",
        description: "Crispy lentil wafers.",
        price: 4.0
      },
      {
        name: "Peanut Masala",
        description: "Salted roasted peanuts mixed with onion, tomatoes, and Nepali spices.",
        price: 9.0
      },
      {
        name: "Veg Samosa (2 pcs)",
        description: "Vegetable samosas served with mint and tamarind chutney.",
        price: 8.0
      },
      {
        name: "Samosa Chaat",
        description: "Mashed samosa topped with chaat masala, yogurt, mint, tamarind chutney, and chickpeas.",
        price: 10.0
      },
      {
        name: "Cauliflower Bites",
        description: "Crispy cauliflower tossed in your choice of sauce (Honey Garlic, Sweet Thai, Mustang Hot, BBQ, Teriyaki, Beijing Super Hot, Cajun, Chipotle Mayo, Tandoori).",
        price: 17.0
      }
    ]
  },

  {
    section: "Pakora",
    items: [
      {
        name: "Veg Pakora",
        description: "Mixed vegetable fritters served with mint and tamarind chutney.",
        price: 10.0
      },
      {
        name: "Paneer Pakora",
        description: "Indian cottage cheese fritters served with mint and tamarind chutney.",
        price: 16.0
      },
      {
        name: "Chicken Pakora",
        description: "Chicken fritters served with mint and tamarind chutney.",
        price: 16.0
      },
      {
        name: "Fish Pakora",
        description: "Basa fish marinated with special spices and fried in chickpea batter.",
        price: 16.0
      }
    ]
  },

  {
    section: "Wings & Platter",
    items: [
      {
        name: "Veggie Wings (10 pcs)",
        description: "Crispy veggie wings tossed in your choice of sauce.",
        price: 18.0
      },
      {
        name: "Chicken Wings",
        description: "Chicken wings tossed in your choice of sauce.",
        price: 16.0
      },
      {
        name: "Himalayan Veg Platter",
        description: "Veggie wings, veg momo, paneer momo, veg spring roll, and four dipping sauces (all deep fried).",
        price: 20.0
      },
      {
        name: "Himalayan Non-Veg Platter",
        description: "Chicken wings, chicken, lamb and shrimp momo with three dipping sauces (all deep fried).",
        price: 24.0
      }
    ]
  },

  {
    section: "Tandoori Dishes",
    items: [
      {
        name: "Paneer Tikka",
        description: "Fresh cottage cheese marinated in tandoori spices, ginger, and garlic, cooked in the tandoor.",
        price: 18.0
      },
      {
        name: "Fish Tikka",
        description: "Fish marinated in tandoori spices, ginger, and garlic, cooked in the tandoor.",
        price: 20.0
      },
      {
        name: "Chicken Tikka",
        description: "Boneless chicken marinated in tandoori spices, ginger, and garlic, cooked in the tandoor.",
        price: 20.0
      },
      {
        name: "Malai Soya Chaap",
        description: "Veg soya chaap marinated in creamy tandoori spices with ginger and garlic.",
        price: 18.0
      },
      {
        name: "Malai Paneer Tikka",
        description: "Paneer marinated in creamy tandoori spices with ginger and garlic.",
        price: 20.0
      },
      {
        name: "Malai Chicken Tikka",
        description: "Chicken marinated in creamy tandoori spices with ginger and garlic.",
        price: 20.0
      },
      {
        name: "Tandoori Prawn",
        description: "Prawns marinated in tandoori spices, ginger, and garlic, cooked in the tandoor.",
        price: 23.0
      },
      {
        name: "Tandoori Wings",
        description: "Chicken wings marinated in tandoori spices, ginger, and garlic.",
        price: 16.0
      },
      {
        name: "Tandoori Chicken",
        description: "Bone-in chicken pieces marinated in classic tandoori spices.",
        price: 20.0
      }
    ]
  },

  {
    section: "Non-Veg Curry (Chicken)",
    items: [
      { name: "Butter Chicken", description: "Tandoori chicken in a rich, creamy tomato butter sauce.", price: 18.0 },
      { name: "Chicken Curry", description: "Chicken cooked in traditional Nepali/Indian style onion-tomato gravy with spices.", price: 18.0 },
      { name: "Desi Style Tawa Chicken", description: "Spicy chicken cooked on a tawa with onions, tomatoes, and spices.", price: 19.0 },
      { name: "Karahi Chicken", description: "Chicken cooked with onions and peppers in thick tomato-onion gravy.", price: 19.0 },
      { name: "Handi Chicken", description: "Chicken cooked in a special handi-style aromatic gravy.", price: 19.0 },
      { name: "Palak Chicken", description: "Chicken cooked in spiced spinach gravy.", price: 19.0 },
      { name: "Chicken Korma", description: "Chicken in a mild, rich cashew-cream sauce.", price: 19.0 },
      { name: "Chicken Tikka Masala", description: "Chicken tikka in a spiced tomato and cream masala sauce.", price: 20.0 },
      { name: "Chicken Vindaloo", description: "Spicy and tangy chicken curry with potatoes.", price: 18.0 },
      { name: "Chicken Goa Curry", description: "Goan-style chicken curry with coconut and spices.", price: 19.0 },
      { name: "Mango Chicken", description: "Chicken cooked in a tangy-sweet mango-based curry sauce.", price: 19.0 }
    ]
  },

  {
    section: "Non-Veg Curry (Lamb, Fish, Prawn)",
    items: [
      {
        name: "Lamb Korma",
        description: "Lamb cubes cooked in a mild, rich cashew-flavored creamy sauce.",
        price: 21.0
      },
      {
        name: "Palak Lamb",
        description: "Boneless lamb cooked in spinach with Nepali-style onion-tomato gravy.",
        price: 21.0
      },
      {
        name: "Karahi Lamb",
        description: "Lamb cooked with sautéed onion and pepper in tomato-onion gravy.",
        price: 21.0
      },
      {
        name: "Lamb Curry",
        description: "Lamb cooked in traditional Nepalese onion gravy and spices.",
        price: 21.0
      },
      {
        name: "Lamb Vindaloo",
        description: "Boneless lamb cooked with potatoes in a hot and sour vindaloo gravy.",
        price: 21.0
      },
      {
        name: "Lamb Rogan Josh",
        description: "Lamb cooked in a rich aromatic gravy with a touch of cream.",
        price: 21.0
      },
      {
        name: "Prawn Korma",
        description: "Prawns cooked in mild, rich cashew-flavored creamy sauce.",
        price: 23.0
      },
      {
        name: "Prawn Curry",
        description: "Prawns cooked in traditional Nepalese onion gravy with herbs and spices.",
        price: 23.0
      },
      {
        name: "Fish Masala",
        description: "Basa fish cooked in onion and tomato gravy with unique spices.",
        price: 20.0
      },
      {
        name: "Salmon Curry",
        description: "Salmon cooked in onion-tomato gravy with spices.",
        price: 23.0
      }
    ]
  },

  {
    section: "Veg Curry",
    items: [
      {
        name: "Shahi Paneer",
        description: "Fresh cottage cheese cooked in smooth tomato sauce with onions and spices.",
        price: 17.0
      },
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese cooked in a rich, creamy butter sauce.",
        price: 17.0
      },
      {
        name: "Handi Paneer",
        description: "Paneer in a house-special gravy with tomato, green chilies, ginger, and special spices.",
        price: 17.0
      },
      {
        name: "Palak Paneer",
        description: "Fresh cottage cheese cooked in spiced spinach gravy with Nepali spices.",
        price: 18.0
      },
      {
        name: "Karahi Paneer",
        description: "Paneer cooked with sautéed onion and pepper in tomato-onion gravy with Nepali herbs.",
        price: 18.0
      },
      {
        name: "Mixed Vegetables",
        description: "Seasonal vegetables cooked with tomato, onion, ginger, garlic, and spices.",
        price: 17.0
      },
      {
        name: "Veg Korma",
        description: "Mixed vegetables cooked in a rich cream and cashew gravy.",
        price: 18.0
      },
      {
        name: "Malai Kofta",
        description: "Cheese and potato dumplings cooked in a royal creamy vegetable sauce.",
        price: 18.0
      },
      {
        name: "Butter Soya Chaap Curry",
        description: "Soya chaap cooked in rich creamy butter gravy.",
        price: 17.0
      },
      {
        name: "Karahi Mushroom",
        description: "Mushrooms cooked with sautéed onion and pepper in tomato-onion gravy with Nepali herbs.",
        price: 17.0
      },
      {
        name: "Aloo Gobhi",
        description: "Cauliflower and potatoes cooked in onion-tomato gravy with herbs and spices.",
        price: 18.0
      },
      {
        name: "Bhindi Masala",
        description: "Okra cooked with onion-tomato gravy and spices.",
        price: 17.0
      },
      {
        name: "Dal Makhani",
        description: "Black lentils slow-cooked with aromatic spices, fresh ginger and garlic.",
        price: 16.0
      },
      {
        name: "Dal Tadka / Yellow Dal",
        description: "Yellow lentils tempered with ghee, garlic, ginger, cumin, onions, and tomatoes.",
        price: 16.0
      }
    ]
  },

  {
    section: "Momo (Freshly Handmade Dumplings)",
    items: [
      // Steamed
      { name: "Steamed Momo - Veg", description: "Traditional Nepali steamed dumplings with vegetable filling.", price: 15.0 },
      { name: "Steamed Momo - Paneer", description: "Steamed dumplings with paneer filling.", price: 16.0 },
      { name: "Steamed Momo - Chicken", description: "Steamed dumplings with chicken filling.", price: 17.0 },
      { name: "Steamed Momo - Lamb", description: "Steamed dumplings with lamb filling.", price: 18.0 },
      { name: "Steamed Momo - Shrimp", description: "Steamed dumplings with shrimp filling.", price: 18.0 },

      // Deep Fried
      { name: "Deep Fried Momo - Veg", description: "Crispy deep-fried vegetable dumplings.", price: 15.0 },
      { name: "Deep Fried Momo - Paneer", description: "Crispy deep-fried paneer dumplings.", price: 16.0 },
      { name: "Deep Fried Momo - Chicken", description: "Crispy deep-fried chicken dumplings.", price: 17.0 },
      { name: "Deep Fried Momo - Lamb", description: "Crispy deep-fried lamb dumplings.", price: 18.0 },
      { name: "Deep Fried Momo - Shrimp", description: "Crispy deep-fried shrimp dumplings.", price: 18.0 },

      // Half and Half
      { name: "Half & Half Momo - Veg", description: "Half steamed, half fried vegetable dumplings.", price: 16.0 },
      { name: "Half & Half Momo - Paneer", description: "Half steamed, half fried paneer dumplings.", price: 17.0 },
      { name: "Half & Half Momo - Chicken", description: "Half steamed, half fried chicken dumplings.", price: 17.0 },
      { name: "Half & Half Momo - Lamb", description: "Half steamed, half fried lamb dumplings.", price: 18.0 },
      { name: "Half & Half Momo - Shrimp", description: "Half steamed, half fried shrimp dumplings.", price: 18.0 },

      // Chili Stir-Fried
      { name: "Chili Stir-Fried Momo - Veg", description: "Vegetable dumplings stir-fried with veggies in chili sauce.", price: 17.0 },
      { name: "Chili Stir-Fried Momo - Paneer", description: "Paneer dumplings stir-fried with veggies in chili sauce.", price: 18.0 },
      { name: "Chili Stir-Fried Momo - Chicken", description: "Chicken dumplings stir-fried with veggies in chili sauce.", price: 18.0 },
      { name: "Chili Stir-Fried Momo - Lamb", description: "Lamb dumplings stir-fried with veggies in chili sauce.", price: 19.0 },
      { name: "Chili Stir-Fried Momo - Shrimp", description: "Shrimp dumplings stir-fried with veggies in chili sauce.", price: 19.0 },

      // Pan Fried
      { name: "Pan Fried Momo - Veg", description: "Pan-fried vegetable dumplings with a crispy base.", price: 17.0 },
      { name: "Pan Fried Momo - Paneer", description: "Pan-fried paneer dumplings.", price: 18.0 },
      { name: "Pan Fried Momo - Chicken", description: "Pan-fried chicken dumplings.", price: 18.0 },
      { name: "Pan Fried Momo - Lamb", description: "Pan-fried lamb dumplings.", price: 19.0 },
      { name: "Pan Fried Momo - Shrimp", description: "Pan-fried shrimp dumplings.", price: 19.0 },

      // Jhol
      { name: "Jhol Momo - Veg", description: "Vegetable dumplings in tomato-based Nepali-style soup.", price: 17.0 },
      { name: "Jhol Momo - Paneer", description: "Paneer dumplings in tomato-based Nepali-style soup.", price: 17.0 },
      { name: "Jhol Momo - Chicken", description: "Chicken dumplings in tomato-based Nepali-style soup.", price: 17.0 },
      { name: "Jhol Momo - Lamb", description: "Lamb dumplings in tomato-based Nepali-style soup.", price: 18.0 },
      { name: "Jhol Momo - Shrimp", description: "Shrimp dumplings in tomato-based Nepali-style soup.", price: 18.0 },

      // Tandoori
      { name: "Tandoori Momo - Veg", description: "Vegetable dumplings grilled with tandoori spices.", price: 17.0 },
      { name: "Tandoori Momo - Paneer", description: "Paneer dumplings grilled with tandoori spices.", price: 18.0 },
      { name: "Tandoori Momo - Chicken", description: "Chicken dumplings grilled with tandoori spices.", price: 18.0 },
      { name: "Tandoori Momo - Lamb", description: "Lamb dumplings grilled with tandoori spices.", price: 20.0 },
      { name: "Tandoori Momo - Shrimp", description: "Shrimp dumplings grilled with tandoori spices.", price: 20.0 },

      // Mustang Hot
      { name: "Mustang Hot Momo - Veg", description: "Vegetable dumplings tossed in spicy Mustang hot sauce.", price: 17.0 },
      { name: "Mustang Hot Momo - Paneer", description: "Paneer dumplings tossed in spicy Mustang hot sauce.", price: 18.0 },
      { name: "Mustang Hot Momo - Chicken", description: "Chicken dumplings tossed in spicy Mustang hot sauce.", price: 18.0 },
      { name: "Mustang Hot Momo - Lamb", description: "Lamb dumplings tossed in spicy Mustang hot sauce.", price: 20.0 },
      { name: "Mustang Hot Momo - Shrimp", description: "Shrimp dumplings tossed in spicy Mustang hot sauce.", price: 20.0 },

      // Butter Cheesy
      { name: "Butter Cheesy Momo - Veg", description: "Vegetable dumplings topped with buttery cheese sauce (steamed or fried).", price: 17.0 },
      { name: "Butter Cheesy Momo - Paneer", description: "Paneer dumplings topped with buttery cheese sauce.", price: 18.0 },
      { name: "Butter Cheesy Momo - Chicken", description: "Chicken dumplings topped with buttery cheese sauce.", price: 18.0 },
      { name: "Butter Cheesy Momo - Lamb", description: "Lamb dumplings topped with buttery cheese sauce.", price: 20.0 },
      { name: "Butter Cheesy Momo - Shrimp", description: "Shrimp dumplings topped with buttery cheese sauce.", price: 20.0 },

      // Chipotle Mayo
      { name: "Chipotle Mayo Momo - Veg", description: "Vegetable dumplings with chipotle mayo (steamed or fried).", price: 17.0 },
      { name: "Chipotle Mayo Momo - Paneer", description: "Paneer dumplings with chipotle mayo.", price: 18.0 },
      { name: "Chipotle Mayo Momo - Chicken", description: "Chicken dumplings with chipotle mayo.", price: 18.0 },
      { name: "Chipotle Mayo Momo - Lamb", description: "Lamb dumplings with chipotle mayo.", price: 20.0 },
      { name: "Chipotle Mayo Momo - Shrimp", description: "Shrimp dumplings with chipotle mayo.", price: 20.0 },

      // Malai
      { name: "Malai Momo - Veg", description: "Vegetable dumplings in a creamy malai sauce (steamed or fried).", price: 17.0 },
      { name: "Malai Momo - Paneer", description: "Paneer dumplings in a creamy malai sauce.", price: 18.0 },
      { name: "Malai Momo - Chicken", description: "Chicken dumplings in a creamy malai sauce.", price: 18.0 },
      { name: "Malai Momo - Lamb", description: "Lamb dumplings in a creamy malai sauce.", price: 20.0 },
      { name: "Malai Momo - Shrimp", description: "Shrimp dumplings in a creamy malai sauce.", price: 20.0 },

      // Sriracha Mayo
      { name: "Sriracha Mayo Momo - Veg", description: "Vegetable dumplings with sriracha mayo (steamed or fried).", price: 17.0 },
      { name: "Sriracha Mayo Momo - Paneer", description: "Paneer dumplings with sriracha mayo.", price: 18.0 },
      { name: "Sriracha Mayo Momo - Chicken", description: "Chicken dumplings with sriracha mayo.", price: 18.0 },
      { name: "Sriracha Mayo Momo - Lamb", description: "Lamb dumplings with sriracha mayo.", price: 20.0 },
      { name: "Sriracha Mayo Momo - Shrimp", description: "Shrimp dumplings with sriracha mayo.", price: 20.0 }
    ]
  },

 
  {
    section: "Fried Rice",
    items: [
      {
        name: "Vegetable Fried Rice",
        description: "Stir-fried steamed rice with mixed vegetables, soy sauce, and seasonings.",
        price: 16.0
      },
      {
        name: "Mix-Veg Fried Rice",
        description: "Fried rice with assorted mixed vegetables.",
        price: 18.0
      },
      {
        name: "Egg Fried Rice",
        description: "Fried rice with egg and vegetables.",
        price: 17.0
      },
      {
        name: "Paneer Fried Rice",
        description: "Fried rice with paneer and vegetables.",
        price: 17.0
      },
      {
        name: "Chicken Fried Rice",
        description: "Fried rice with chicken and vegetables.",
        price: 17.0
      },
      {
        name: "Prawn/ Shrimp Fried Rice",
        description: "Fried rice with prawns/shrimp and vegetables.",
        price: 20.0
      },
      {
        name: "Mixed House Special Veg Fried Rice",
        description: "Fried rice with paneer, mushroom, and assorted vegetables.",
        price: 23.0
      },
      {
        name: "Mixed House Special Non-Veg Fried Rice",
        description: "Fried rice with prawn, chicken, egg, and vegetables.",
        price: 23.0
      }
    ]
  },
  {
    section: "Popular Nepali Specials",
    items: [
      {
        name: "Nepali Chatpate",
        description: "Puffed rice mixed with onion, tomato, peanuts, bhujia, Nepali spices, and lemon juice.",
        price: 9.0
      },
      {
        name: "Wai Wai Sadeko",
        description: "Wai Wai instant noodles mixed with onion, tomato, peanuts, bhujia, Nepali spices, and lemon juice.",
        price: 9.0
      },
      {
        name: "Nepali Chicken Choila",
        description: "Smoked chicken mixed with green chili, tomato, red onion, and lemon juice.",
        price: 18.0
      },
      {
        name: "Chicken Sekuwa",
        description: "Marinated chicken roasted over open flame in traditional Nepalese style.",
        price: 18.0
      },
      {
        name: "Chicken Tass",
        description: "Dry marinated chicken sautéed in ginger, garlic, and onion with Nepali spices.",
        price: 18.0
      },
      {
        name: "Lamb Tass",
        description: "Dry marinated lamb sautéed in ginger, garlic, and onion with Nepali spices.",
        price: 21.0
      },
      {
        name: "Traditional Nepali Thali Set",
        description: "Traditional Nepali set meal served daily until 4 PM.",
        price: 25.0
      }
    ]
  },

  {
    section: "Naan / Bread & Rice",
    items: [
      {
        name: "Steamed Long Grain Basmati Rice",
        description: "Plain steamed long grain basmati rice.",
        price: 3.0
      },
      {
        name: "Butter Rumali Naan",
        description: "Soft thin naan brushed with butter.",
        price: 3.0
      },
      {
        name: "Garlic Rumali Naan",
        description: "Soft thin naan flavored with garlic and butter.",
        price: 3.5
      },
      {
        name: "Tawa Roti",
        description: "Whole wheat flatbread cooked on tawa.",
        price: 3.0
      }
    ]
  },

  {
    section: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        description: "Sweet milk-solid dumplings soaked in sugar syrup.",
        price: 5.0
      },
      {
        name: "Gulab Jamun with Vanilla Ice Cream",
        description: "Warm gulab jamun served with vanilla ice cream.",
        price: 8.0
      },
      {
        name: "Rasmalai",
        description: "Soft cheese patties soaked in sweet flavored milk.",
        price: 6.0
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream (Mango, Pista, Pan, or Malai).",
        price: 4.0
      },
      {
        name: "Ice Cream",
        description: "Scoops of ice cream (Mango, Vanilla, or Chocolate).",
        price: 5.0
      },
      {
        name: "Cheesecake",
        description: "Rich and creamy cheesecake slice.",
        price: 10.0
      },
      {
        name: "Black Lava Cake",
        description: "Warm chocolate lava cake served with vanilla ice cream.",
        price: 11.0
      }
    ]
  }
];


let menuElement = document.querySelector(".menu-list")

menu.forEach(menuItems => {


  const section = document.createElement("div");
  section.classList.add("section");


  const sectionTitle = document.createElement("div");

  sectionTitle.classList.add("section-container");
  const sectionH1 = document.createElement("div")
  sectionTitle.append(sectionH1)
  sectionH1.textContent = menuItems.section;
  section.appendChild(sectionTitle);

  const itemSection = document.createElement("div");
  itemSection.classList.add("item-section");
  section.appendChild(itemSection);

  // Loop items
  menuItems.items.forEach(item => {
      const eachItem = document.createElement("div");
      eachItem.classList.add("each-item");

      eachItem.innerHTML = `
          <div>${item.name}</div>
          <div>CAD ${item.price}</div>
           <button class="add-to-cart-btn"
        data-name="${item.name}"
        data-price="${item.price}">
  Add to Cart
</button>
          <div class="item-description">${item.description}</div>
      `;

      itemSection.appendChild(eachItem);
  });

  menuElement.appendChild(section);
});


const cursor = document.querySelector(".cursor")
const cartItem = document.querySelector("#cart p")


function getCart() {
return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
const cart = getCart();
const existing = cart.find(item => item.name === name);

if (existing) {
  existing.quantity += 1;
} else {
  cart.push({ name, price, quantity: 1 });
}

saveCart(cart);

cursor.innerHTML = "Item added"
setTimeout( ()=>{
  cursor.innerHTML = ""
},300)

cartItem.innerHTML = totalItem()

console.log(localStorage)


}

function totalItem() {
const cart = getCart();
return cart.reduce((sum, item) => sum + item.quantity, 0);
}



document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
btn.addEventListener("click", () => {
  const name = btn.dataset.name;
  const price = parseFloat(btn.dataset.price);
  addToCart(name, price);
});
});




  

//for cursor in menu
document.addEventListener('mousemove', event =>{
gsap.to(".cursor",{
  x: event.clientX,
  y: event.clientY,
  duration: 4.5,
  ease: "elastic.out(1.75,0.3)",

})
})





const sectionContainers = document.getElementsByClassName("section-container")

Array.from(sectionContainers).forEach( (sectionHeader, index )=> {

  sectionHeader.addEventListener('mouseenter', ()=> {
    console.log("first")
    cursor.innerHTML = `<img src="images/hover${index+1}.avif" alt="">`
    console.log("second")

  })
  sectionHeader.addEventListener('mouseleave', ()=> {
    cursor.innerHTML = " "
  })
})