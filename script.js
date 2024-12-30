// Smooth Scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  let autoSlideInterval;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove("active");
      if (index === currentIndex) {
        item.classList.add("active");
      }
    });

    const trackWidth = track.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    showNextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    showPrevSlide();
    startAutoSlide();
  });

  // Pause auto-slide on hover
  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);

  // Initialize
  updateCarousel();
  startAutoSlide();
});
