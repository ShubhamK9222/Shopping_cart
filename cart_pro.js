var cartItems = JSON.parse(localStorage.getItem("cart-items"));
const cartContainer = document.getElementById("cartItems");

function mybuttonFunction() {
  if (cartItems.length === 0) {
    alert("No items found");
    return;
  }
  alert("Purchase Successful");
}

function updateCart() {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].price * cartItems[i].quantity;
  }
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerText = `Rs ${sum}`;
}

const products = cartItems;

products.map((item) => {

  // Main Div
  let product = document.createElement("div");
  product.id = item.id;
  product.classList.add("cart-row");

  let itemName = document.createElement("span");
  itemName.classList.add("cart-item");
  itemName.classList.add("cart-column");
  itemName.innerHTML = item?.brand;

  let img_span = document.createElement("span");
  let img = document.createElement("img");
  img.src = item.img;
  img.style.width = "35vh";
  img.style.height = "30vh";
  img_span.appendChild(img);
  product.appendChild(img_span);

  product.appendChild(itemName);

  //Cart Item Price
  let cartPrice = document.createElement("div");
  cartPrice.classList.add("cart-price");
  cartPrice.classList.add("cart-header");
  cartPrice.classList.add("cart-column");

  cartPrice.innerHTML = item.price;
  product.appendChild(cartPrice);

  // Cart Quantity
  let cartQuantity = document.createElement("div");
  cartQuantity.classList.add("cart-quantity");
  cartQuantity.classList.add("cart-header");
  cartQuantity.classList.add("cart-column");
  cartQuantity.innerHTML = item.quantity;
  updateCart();
  product.appendChild(cartQuantity);

  


  //Remove Button
  let remove_btn = document.createElement("div");
  remove_btn.innerHTML = `<button class="btn-rem" type="button">REMOVE</button>`;
  remove_btn.addEventListener("click", () => {
    const productDiv = remove_btn.closest(".cart-row");
    productDiv.parentNode.removeChild(productDiv);
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        cartItems.splice(i, 1);
      }
    }
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
    updateCart();
  });
  remove_btn.id = "remove_btn";
  remove_btn.classList.add("cart-quantity");
  remove_btn.classList.add("cart-header");
  remove_btn.classList.add("cart-column");
  product.appendChild(remove_btn);

  cartContainer.appendChild(product);
});
