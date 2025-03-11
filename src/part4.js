//desktop version
export function initSlider() {
  const cardsContainer = document.querySelector(".cards-container_block4");
  const cards = document.querySelectorAll(".card_block4");
  const btnNext = document.querySelector(".next");
  const btnPrev = document.querySelector(".prev");
  const cardWidth = cards[0].offsetWidth;
  let currentPosition = 0;

  //mobile version
  let touchStartX = 0;
  let touchEndX = 0;
  const indicators = document.querySelectorAll(".indicator_block4");

  //slider for Desktop
  btnNext.addEventListener("click", () => {
    currentPosition -= cardWidth;
    if (currentPosition < -cardWidth * (cards.length - 3)) {
      currentPosition = 0;
    }
    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
  });

  btnPrev.addEventListener("click", () => {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
      currentPosition = -cardWidth * (cards.length - 3);
    }
    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
  });

  //slider for mobile
  cardsContainer.addEventListener("touchstart", (s) => {
    touchStartX = s.touches[0].clientX;
  });

  cardsContainer.addEventListener("touchend", (s) => {
    touchEndX = s.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50;
    if (swipeDistance > swipeThreshold) {
      currentPosition += cardWidth;
      if (currentPosition > 0) {
        currentPosition = -cardWidth * (cards.length - 1);
      }
      cardsContainer.style.transform = `translateX(${currentPosition}px)`;
      updateUndicators();
    } else if (swipeDistance < -swipeThreshold) {
      currentPosition -= cardWidth;
      if (currentPosition < -cardWidth * (cards.length - 1)) {
        currentPosition = 0;
      }
      cardsContainer.style.transform = `translateX(${currentPosition}px)`;
      updateUndicators();
    }
  }
  function updateUndicators() {
    const activeIndex = Math.abs(currentPosition / cardWidth);
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    if (indicators[activeIndex]) {
      indicators[activeIndex].classList.add("active");
    }
  }
}
