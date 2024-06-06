document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartContent = document.querySelector(".product-cart-content");

  function renderCart() {
    cartContent.innerHTML = "";
    cartItems.forEach(function (item) {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("product-cart-content-item");
      cartItemElement.innerHTML = `
                <div class="cart-img">
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="cart-delete">
                    <button class="delete-btn" data-id="${item.id}">X</button>
                </div>
                </div>
                <div class="cart-name">${item.name}</div>
                <div class="cart-quality">1</div>
                <div class="cart-price">${item.price}</div>
            `;
      cartContent.appendChild(cartItemElement);
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const itemId = button.getAttribute("data-id");
        const itemIndex = cartItems.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
          cartItems.splice(itemIndex, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          renderCart();
        }
      });
    });
  }

  renderCart();
});
