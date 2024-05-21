function showMenuMobi() {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobiMenu = document.querySelector(".header__mobi");
  const closeButton = document.querySelector(".close-button");

  hamburgerButton.addEventListener("click", function () {
    if (mobiMenu.style.display === "block") {
      mobiMenu.style.animation = "closeMenuMobi 0.3s forwards";
      setTimeout(() => {
        mobiMenu.style.display = "none";
      }, 300); // Match the duration of the slideOut animation
    } else {
      mobiMenu.style.display = "block";
      mobiMenu.style.animation = "showMenuMobi 0.3s forwards";
    }
  });

  closeButton.addEventListener("click", function () {
    mobiMenu.style.animation = "closeMenuMobi 0.3s forwards";
    setTimeout(() => {
      mobiMenu.style.display = "none";
    }, 300); // Match the duration of the slideOut animation
  });
}

showMenuMobi();

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
