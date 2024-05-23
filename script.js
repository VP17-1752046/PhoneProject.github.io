function showMenuMobi() {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobiMenu = document.querySelector(".header__mobi");
  const closeButton = document.querySelector(".close-button");

  hamburgerButton.addEventListener("click", function () {
    if (mobiMenu.style.display === "block") {
      mobiMenu.style.animation = "closeMenuMobi 0.3s forwards";
      setTimeout(() => {
        mobiMenu.style.display = "none";
      }, 300);
    } else {
      mobiMenu.style.display = "block";
      mobiMenu.style.animation = "showMenuMobi 0.3s forwards";
    }
  });

  closeButton.addEventListener("click", function () {
    mobiMenu.style.animation = "closeMenuMobi 0.3s forwards";
    setTimeout(() => {
      mobiMenu.style.display = "none";
    }, 300);
  });
}

showMenuMobi();

// Slide banner
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".banner__slide-list");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  document.querySelector(".next-button").addEventListener("click", nextSlide);
  document.querySelector(".prev-button").addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);
});

// Render favorite product
const data = [
  {
    id: 1,
    image: "./assets/favorite1.png",
    name: "iPhone 14 Pro Max 128GB",
    promotional: "27.900.000đ",
    cost: "28.900.000đ",
  },
  {
    id: 2,
    image: "./assets/favorite2.png",
    name: "iPhone 14 Pro Max 256GB",
    promotional: "28.900.000đ",
    cost: "29.500.000đ",
  },
  {
    id: 3,
    image: "./assets/favorite3.png",
    name: "iPhone 15 Pro Max 256GB",
    promotional: "29.900.000đ",
    cost: "32.900.000đ",
  },
  {
    id: 4,
    image: "./assets/favorite4.png",
    name: "iPhone 15 Pro Max 512GB",
    promotional: "32.500.000đ",
    cost: "36.500.000đ",
  },
];

const favoriteProductList = document.querySelector(".favorite-product-content");

for (let product of data) {
  const productElement = document.createElement("div");
  productElement.classList.add("favorite-product-list");

  productElement.innerHTML = `<a href="#" class="product-img"
            ><img src="${product.image}" alt="favorite1"
          /></a>
          <a href="#" class="product-name">${product.name}</a>
          <div class="product-price">
            <span class="promotional-price">${product.promotional}</span>
            <span class="cost-price">${product.cost}</span>
          </div>`;

  favoriteProductList.appendChild(productElement);
}
