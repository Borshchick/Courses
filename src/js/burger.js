let burgerBtn = document.querySelector(".header_burger__icon");
let burgerItems = document.querySelector(".header_burger__items");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active_burger_bnt");
  burgerItems.classList.toggle("active_burger");
});
let closeArrow = document.querySelector(".header_burger__arrow");

closeArrow.addEventListener("click", function () {
  burgerItems.classList.remove("active_burger");
  burgerBtn.classList.remove("active_burger_bnt");
});
let burgerLinks = document.querySelectorAll(".header_burger__link");
burgerLinks.forEach(function (burgerLink) {
  burgerLink.addEventListener("click", function () {
    burgerItems.classList.remove("active_burger");
    burgerBtn.classList.remove("active_burger_bnt");
  });
});
