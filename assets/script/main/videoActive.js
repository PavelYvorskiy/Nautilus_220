const one = document.querySelector(".iframe");
const btnTest = document.querySelector(".videoSecond-button");
btnTest.addEventListener("click", () => {
  setTimeout(() => {
    timout();
  }, 1200);
  one.src += "&autoplay=1";
});

function timout() {
  btnTest.classList.add("active");
}
