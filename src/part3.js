const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll(".carousel-card-block3"));
const firstSliderContainer = document.querySelector(".conteiner-block3-two");
const firstPointers = Array.from(
  firstSliderContainer.querySelectorAll(".pointer")
);
const slideCount = slides.length;
let slideIndex = 0;
let prevSlideIndex = 0;

prevButton.addEventListener("click", () => {
  prevSlideIndex = slideIndex;
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener("click", () => {
  prevSlideIndex = slideIndex;
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const slideOffset = -slideIndex * 380;
  slider.style.transform = `translateX(${slideOffset}px)`;
  firstPointers[prevSlideIndex]?.classList?.remove("active");
  firstPointers[slideIndex].classList.add("active");
};

let touchstartX;

slider.addEventListener("touchstart", (event) => {
  touchstartX = event.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (event) => {
  const touchendX = event.changedTouches[0].screenX;

  prevSlideIndex = slideIndex;

  if (touchendX < touchstartX) {
    slideIndex = (slideIndex + 1) % slideCount;
  }

  if (touchendX > touchstartX) {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  }

  slide();
});

const secondSlider = document.querySelector(".conteiner-block3");
const secondSlides = Array.from(
  secondSlider.querySelectorAll(".elements_conteiner_block3")
);
const secondSliderContainer = document.querySelector(".conteiner-block3-one");
const secondPointers = Array.from(
  secondSliderContainer.querySelectorAll(".pointer")
);
const secondSlideCount = secondSlides.length;
let secondSlideIndex = 0;
let secondPrevSlideIndex = 0;
let secondTouchstartX;

secondSlider.addEventListener("touchstart", (event) => {
  secondTouchstartX = event.changedTouches[0].screenX;
});

secondSlider.addEventListener("touchend", (event) => {
  if (window.matchMedia("(min-width: 375px)").matches) {
    return;
  }

  const touchendX = event.changedTouches[0].screenX;

  secondPrevSlideIndex = secondSlideIndex;

  if (touchendX < secondTouchstartX) {
    secondSlideIndex = (secondSlideIndex + 1) % secondSlideCount;
  }

  if (touchendX > secondTouchstartX) {
    secondSlideIndex =
      (secondSlideIndex - 1 + secondSlideCount) % secondSlideCount;
  }

  const slideOffset = -secondSlideIndex * window.innerWidth;
  secondSlider.style.transform = `translateX(${slideOffset}px)`;
  secondPointers[secondPrevSlideIndex].classList.remove("active");
  secondPointers[secondSlideIndex].classList.add("active");
});
