/*  Header === Toggle */
function toggkeMenu() {
  const menuToggle = document.querySelector('.menuTobble')
  const navigation = document.querySelector('.navigation')
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

/* Btn Pesquisar */
let inputBox = document.querySelector(".input-box"),
searchIcon = document.querySelector(".search"),
closeIcon = document.querySelector(".close");

searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

/* Home Carrousel */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


