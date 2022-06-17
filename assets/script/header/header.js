const options = {
  offset: 10,
};

const header = new Headhesive(".header", options);
const mobMenu = document.querySelector(".navbar-mob");

const activeHeader = document.querySelectorAll(".header");
activeHeader.forEach((elem) => {
  const navButton = elem.querySelector(".navbar-navigation__btn");
  navButton.addEventListener("click", () => {
    mobMenu.classList.toggle("active");
  });
});

const noActiveNavBar = document.querySelectorAll(".navMenu-mob__item");
noActiveNavBar.forEach((el) => {
  el.addEventListener("click", () => {
    mobMenu.classList.remove("active");
  });
});
