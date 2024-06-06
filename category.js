const categoryData = {
  iphone: [
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
  ],
  ipad: [
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
  ],
  mac: [
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
  ],
  watch: [
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
  ],
  airpod: [
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
  ],
};

function renderCategory(category) {
  const dataList = document.querySelector(".category-content");
  dataList.innerHTML = "";

  const data = categoryData[category];
  if (data) {
    for (let productData of data) {
      const productDataElement = document.createElement("div");
      productDataElement.classList.add("category-list");

      productDataElement.innerHTML = `<a href="#" class="product-img">
              <img src="${productData.image}" alt="${productData.name}" />
            </a>
            <a href="#" class="product-name">${productData.name}</a>
            <div class="product-price">
              <span class="promotional-price">${productData.promotional}</span>
              <span class="cost-price">${productData.cost}</span>
            </div>`;

      dataList.appendChild(productDataElement);
    }
  } else {
    console.error("Category data not found.");
  }
}

const categoryLinks = document.querySelectorAll(".header__menu-links a");
categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const category = link.dataset.category;
    renderCategory(category);
  });
});

renderCategory("iphone");
