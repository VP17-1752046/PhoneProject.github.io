// Sticky header
window.addEventListener("scroll", function () {
  const header = document.getElementById("header__top");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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
const dataFavorite = [
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

for (let productFavorite of dataFavorite) {
  const productFavoriteElement = document.createElement("div");
  productFavoriteElement.classList.add("favorite-product-list");

  productFavoriteElement.innerHTML = `<a href="detail-product.html?productId=${productFavorite.id}" class="product-img"
            ><img src="${productFavorite.image}" alt="favorite1"
          /></a>
          <a href="#" class="product-name">${productFavorite.name}</a>
          <div class="product-price">
            <span class="promotional-price">${productFavorite.promotional}</span>
            <span class="cost-price">${productFavorite.cost}</span>
          </div>`;

  favoriteProductList.appendChild(productFavoriteElement);
}

// Render iPhone product
const dataIphone = [
  {
    id: 1,
    image: "./assets/iphone1.png",
    name: "iPhone 13 Pro Max 128GB Used",
    promotional: "15.900.000đ",
    cost: "17.900.000đ",
  },
  {
    id: 2,
    image: "./assets/iphone2.png",
    name: "iPhone 13 Pro 128GB Used",
    promotional: "13.900.000đ",
    cost: "14.900.000đ",
  },
  {
    id: 3,
    image: "./assets/iphone3.png",
    name: "iPhone 15 128GB",
    promotional: "20.900.000đ",
    cost: "22.900.000đ",
  },
  {
    id: 4,
    image: "./assets/iphone4.png",
    name: "iPhone 15 Plus 128GB",
    promotional: "21.500.000đ",
    cost: "24.900.000đ",
  },
  {
    id: 5,
    image: "./assets/iphone5.png",
    name: "iPhone 14 Plus 512GB",
    promotional: "21.900.000đ",
    cost: "22.900.000đ",
  },
  {
    id: 6,
    image: "./assets/iphone6.png",
    name: "iPhone 14 Plus 256GB",
    promotional: "20.900.000đ",
    cost: "22.900.000đ",
  },
  {
    id: 7,
    image: "./assets/iphone7.png",
    name: "iPhone 14 256GB",
    promotional: "19.500.000đ",
    cost: "20.500.000đ",
  },
  {
    id: 8,
    image: "./assets/iphone8.png",
    name: "iPhone 14 128GB",
    promotional: "17.900.000đ",
    cost: "18.900.000đ",
  },
];

const iPhoneList = document.querySelector(".iPhone-content");

for (let productIphone of dataIphone) {
  const productIphoneElement = document.createElement("div");
  productIphoneElement.classList.add("iPhone-list");

  productIphoneElement.innerHTML = `<a href="#" class="product-img"
            ><img src="${productIphone.image}" alt="iPhone1"
          /></a>
          <a href="#" class="product-name">${productIphone.name}</a>
          <div class="product-price">
            <span class="promotional-price">${productIphone.promotional}</span>
            <span class="cost-price">${productIphone.cost}</span>
          </div>`;

  iPhoneList.appendChild(productIphoneElement);
}

// Render iPad product
const dataIpad = [
  {
    id: 1,
    image: "./assets/ipad1.png",
    name: 'iPad Pro 12.9" M2 128GB Wi-Fi',
    promotional: "28.190.000đ",
    cost: "29.190.000đ",
  },
  {
    id: 2,
    image: "./assets/ipad2.png",
    name: 'iPad Pro 12.9" M2 128GB Wi-Fi + Cellular',
    promotional: "20.990.000đ",
    cost: "21.990.000đ",
  },
  {
    id: 3,
    image: "./assets/ipad3.png",
    name: 'iPad Pro 11" M2 128GB Wi-Fi',
    promotional: "15.590.000đ",
    cost: "16.590.000đ",
  },
  {
    id: 4,
    image: "./assets/ipad4.png",
    name: 'iPad Pro 11" M2 128GB Wi-Fi + Cellular',
    promotional: "20.989.000đ",
    cost: "21.989.000đ",
  },
  {
    id: 5,
    image: "./assets/ipad5.png",
    name: 'iPad Pro 12.9" M1 128GB Wi-Fi',
    promotional: "23.990.000đ",
    cost: "24.990.000đ",
  },
  {
    id: 6,
    image: "./assets/ipad6.png",
    name: 'iPad Pro 12.9" M1 128GB Wi-Fi + Cellular',
    promotional: "29.290.000đ",
    cost: "30.290.000đ",
  },
];

const iPadList = document.querySelector(".iPad-content");

for (let productIpad of dataIpad) {
  const productIpadElement = document.createElement("div");
  productIpadElement.classList.add("iPad-list");

  productIpadElement.innerHTML = `<a href="#" class="product-img"
            ><img src="${productIpad.image}" alt="iPad1"
          /></a>
          <a href="#" class="product-name">${productIpad.name}</a>
          <div class="product-price">
            <span class="promotional-price">${productIpad.promotional}</span>
            <span class="cost-price">${productIpad.cost}</span>
          </div>`;

  iPadList.appendChild(productIpadElement);
}

// Render MAC product
const dataMac = [
  {
    id: 1,
    image: "./assets/mac1.png",
    name: "Macbook Air M1 8GB - 256GB",
    promotional: "18.900.000đ",
    cost: "20.900.000đ",
  },
  {
    id: 2,
    image: "./assets/mac2.png",
    name: "Macbook Pro M1 8GB - 256GB",
    promotional: "28.500.000đ",
    cost: "30.500.000đ",
  },
  {
    id: 3,
    image: "./assets/mac3.png",
    name: "Macbook Air M2 8GB - 256GB",
    promotional: "25.900.000đ",
    cost: "27.900.000đ",
  },
  {
    id: 4,
    image: "./assets/mac4.png",
    name: "Macbook Pro M2 8GB - 256GB",
    promotional: "28.900.000đ",
    cost: "30.900.000đ",
  },
];

const MacList = document.querySelector(".Mac-content");

for (let productMac of dataMac) {
  const productMacElement = document.createElement("div");
  productMacElement.classList.add("Mac-list");

  productMacElement.innerHTML = `<a href="#" class="product-img"
            ><img src="${productMac.image}" alt="Mac1"
          /></a>
          <a href="#" class="product-name">${productMac.name}</a>
          <div class="product-price">
            <span class="promotional-price">${productMac.promotional}</span>
            <span class="cost-price">${productMac.cost}</span>
          </div>`;

  MacList.appendChild(productMacElement);
}

// Render Watch product
const dataWatch = [
  {
    id: 1,
    image: "./assets/watch1.png",
    name: "Apple Watch Ultra 49MM with Trail Loop",
    promotional: "14.990.000đ",
    cost: "15.990.000đ",
  },
  {
    id: 2,
    image: "./assets/watch2.png",
    name: "Apple Watch Ultra 49MM with Alpine Loop",
    promotional: "11.790.000đ",
    cost: "13.790.000đ",
  },
  {
    id: 3,
    image: "./assets/watch3.png",
    name: "Apple Watch Ultra 49MM with Ocean Band",
    promotional: "14.590.000đ",
    cost: "15.590.000đ",
  },
  {
    id: 4,
    image: "./assets/watch4.png",
    name: "Apple Watch Series 8 GPS 41MM",
    promotional: "7.490.000đ",
    cost: "9.490.000đ",
  },
  {
    id: 5,
    image: "./assets/watch5.png",
    name: "Apple Watch Series 8 GPS 45MM",
    promotional: "6.990.000đ",
    cost: "8.990.000đ",
  },
];

const WatchList = document.querySelector(".Watch-content");

for (let productWatch of dataWatch) {
  const productWatchElement = document.createElement("div");
  productWatchElement.classList.add("Watch-list");

  productWatchElement.innerHTML = `<a href="#" class="product-img"
            ><img src="${productWatch.image}" alt="watch1"
          /></a>
          <a href="#" class="product-name">${productWatch.name}</a>
          <div class="product-price">
            <span class="promotional-price">${productWatch.promotional}</span>
            <span class="cost-price">${productWatch.cost}</span>
          </div>`;

  WatchList.appendChild(productWatchElement);
}

// Render airPods product
const dataAirPods = [
  {
    id: 1,
    image: "./assets/airPods1.png",
    name: "AirPods 2 New",
    promotional: "2.890.000đ",
    cost: "2.890.000đ",
  },
  {
    id: 2,
    image: "./assets/airPods2.png",
    name: "AirPods 3 New",
    promotional: "3.890.000đ",
    cost: "4.490.000đ",
  },
  {
    id: 3,
    image: "./assets/airPods3.png",
    name: "AirPods Pro 2 New",
    promotional: "5.000.000đ",
    cost: "6.500.000đ",
  },
  {
    id: 4,
    image: "./assets/airPods4.png",
    name: "EarPods Jack 3.5mm",
    promotional: "290.000đ",
    cost: "500.000đ",
  },
  {
    id: 5,
    image: "./assets/airPods5.png",
    name: "EarPods Jack Lighnight",
    promotional: "490.000đ",
    cost: "700.000đ",
  },
];

const airPodsList = document.querySelector(".airPods-content");

for (let productAirPods of dataAirPods) {
  const productAirPodsElement = document.createElement("div");
  productAirPodsElement.classList.add("airPods-list");

  productAirPodsElement.innerHTML = `<a href="#" class="product-img"
            ><img src="${productAirPods.image}" alt="watch1"
          /></a>
          <a href="#" class="product-name">${productAirPods.name}</a>
          <div class="product-price">
            <span class="promotional-price">${productAirPods.promotional}</span>
            <span class="cost-price">${productAirPods.cost}</span>
          </div>`;

  airPodsList.appendChild(productAirPodsElement);
}
