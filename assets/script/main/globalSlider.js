const visiblSlide = document.querySelector(".content_slider");
const body = document.querySelector("body");

const contentSlider = document.querySelector(".content_slider");
contentSlider.addEventListener("click", () => {
  visiblSlide.classList.remove("active");
  body.classList.remove("active");
});

window.onload = getSlider();

function getSlider() {
  let imgSlider = document.querySelector(".slide-img");

  const boxImgState = document.querySelectorAll(".gallery-box-content");
  boxImgState.forEach((element) => {
    const test = element.querySelectorAll(".gallery-box-content__items");
    test.forEach((elem) => {
      elem.addEventListener("click", () => {
        visiblSlide.classList.add("active");
        body.classList.add("active");
        let imgTest = elem.querySelector("img");
        let imgTestTwo = imgTest.getAttribute("src");
        imgSlider.setAttribute("src", imgTestTwo);
      });
    });
  });
}
