const productDetailCart = document.querySelector(".product-detail-cart");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function togglePopup() {
  popup.classList.toggle("show");
}

productDetailCart.addEventListener("click", togglePopup);

closePopup.addEventListener("click", togglePopup);

function updateCartCount(count) {
  const cartCount = document.querySelector(
    ".header__top-navlinks .fa-shopping-cart"
  );
  cartCount.innerHTML = `<span class="cart-count">${count}</span>`;
}

document
  .querySelector(".product-detail-cart a")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let count = parseInt(localStorage.getItem("cartCount")) || 0;
    count++;
    localStorage.setItem("cartCount", count);

    updateCartCount(count);

    alert("Product added to cart!");
  });

// Select the shopping cart icon
const cartIcon = document.querySelector(
  ".header__top-navlinks .fa-shopping-cart"
);

// Add click event listener to the cart icon
cartIcon.addEventListener("click", function () {
  // Navigate to the cart page
  window.location.href = "cart.html"; // Replace 'cart.html' with your actual cart page URL
});

// dynamic link to detail-product.html
// Function to parse URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Retrieve product ID from URL
var productId = getUrlParameter("productId");

// Sample product data (replace with your actual data)
var products = [
  {
    id: "1",
    name: "iPhone 14 Pro Max 128GB",
    salePrice: "27.900.000đ",
    costPrice: "28.900.000đ",
    image: "./assets/favorite1.png",
  },
  {
    id: "2",
    name: "iPhone 14 Pro Max 256GB",
    salePrice: "28.900.000đ",
    costPrice: "29.500.000đ",
    image: "./assets/favorite2.png",
  },
  {
    id: "3",
    name: "iPhone 15 Pro Max 256GB",
    salePrice: "29.900.000đ",
    costPrice: "32.900.000đ",
    image: "./assets/favorite3.png",
  },
  {
    id: "4",
    name: "iPhone 15 Pro Max 512GB",
    salePrice: "32.500.000đ",
    costPrice: "36.500.000đ",
    image: "./assets/favorite4.png",
  },
];

// Find the product with the matching ID
var product = products.find((p) => p.id === productId);

// Display product details
if (product) {
  document.getElementById("product-details").innerHTML = `
        <div class="left-product-detail">
        <div class="galery-product">
          <a href="#" class="single-img">
            <img src="${product.image}" width="100%" alt="big-img" />
          </a>
          <div class="thumbnail-img">
            <div class="small-img-col">
              <img src="./assets/favorite2.png" width="100%" alt="small1" />
            </div>
            <div class="small-img-col">
              <img src="./assets/favorite3.png" width="100%" alt="small2" />
            </div>
            <div class="small-img-col">
              <img src="./assets/favorite4.png" width="100%" alt="small3" />
            </div>
          </div>
        </div>
        <div class="committed-product">
          <p class="committed-product-title">
            <img src="./assets/committed1.png" alt="committed1" />sản phẩm cam
            kết chính hãng
          </p>
          <p class="committed-product-desc">
            <img src="./assets/committed2.png" alt="committed2" />Bảo hành 12
            tháng với máy new seal
          </p>
          <p class="committed-product-desc">
            <img src="./assets/committed2.png" alt="committed2" />Hỗ trợ cài đặt
            phần mềm TRỌN ĐỜI
          </p>
          <p class="committed-product-desc">
            <img src="./assets/committed2.png" alt="committed2" />Trả góp 0% qua
            thẻ tín dụng
          </p>
          <p class="committed-product-desc">
            <img src="./assets/committed2.png" alt="committed2" />Trả góp lãi
            suất thấp qua Công ty tài chính
          </p>
          <p class="committed-product-desc">
            <img src="./assets/committed2.png" alt="committed2" />Giao hàng tận
            nơi và cài đặt miễn phí
          </p>
          <p class="committed-product-desc">
            <img src="./assets/committed2.png" alt="committed2" />Hotline: 0903
            23 23 23 (09:00 - 22:00 mỗi ngày)
          </p>
        </div>
      </div>
      <div class="right-product-detail">
        <div class="product-detail-name">${product.name}</div>
        <div class="product-detail-color">
          <p>màu sắc</p>
          <div class="color-group">
            <div class="color-product">Space Gray</div>
            <div class="color-product">Silver</div>
            <div class="color-product">Gold</div>
          </div>
        </div>
        <div class="product-detail-price">
          <p class="price-text">Giá bán</p>
          <p class="price-sale">${product.salePrice}</p>
          <p class="price-cost">${product.costPrice}</p>
        </div>
        <div class="product-detail-coupon">
          <div class="coupon-title">Ưu đãi khi mua MacBook Air M1</div>
          <div class="coupon-content">
            <p>
              - TẶNG 10 LẦN DÁN CƯỜNG LỰC iPhone MIỄN PHÍ TRỊ GIÁ 1.500.000Đ
            </p>
            <p>- TRỢ GIÁ ĐẾN 1.000.000Đ KHI THAM GIA THU CŨ ĐỔI MỚI</p>
            <p>- TẶNG VOUCHER SINH NHẬT TRỊ GIÁ 500.000Đ</p>
            <p>- GIẢM ĐẾN 15% KHI MUA KÈM PHỤ KIỆN</p>
          </div>
        </div>
        <div class="product-detail-buy">
          <a href="#"
            ><p class="buy-now">Mua ngay</p>
            <p>Ship nội thành trong ngày</p>
          </a>
        </div>
        <div class="product-detail-cart">
          <a href="#"
            ><i class="fa fa-shopping-cart" aria-hidden="true"></i> thêm giỏ
            hàng</a
          >
        </div>
      </div>
      `;
} else {
  document.getElementById("product-details").innerHTML =
    "<p>Product not found</p>";
}
