const closeModalBtn = document.querySelector(".close-modal-btn");
const mobileNav = document.querySelector("header .mobile-nav");
const mobileNavMenuBtn = document.querySelector("header .mobile-menu-btn");
const overlay = document.querySelector("header .overlay");
const mobileNavLinks = document.querySelectorAll(
  "header .mobile-nav .nav-link a"
);
const arrowUp = document.querySelector("button.arrow-up");

mobileNavMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const removeMenu = () => {
  mobileNav.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.onclick = removeMenu;
overlay.onclick = removeMenu;
mobileNavLinks.forEach((el) => {
  el.addEventListener("click", () => {
    removeMenu();
  });
});

arrowUp.addEventListener("click", (e) => {
  scrollTo(0, 0);
});

const qoutesContainer = document.querySelector(".qoutes-container");
const slides = qoutesContainer.querySelectorAll(".qoute");
const leftArrow = document.querySelector(".slider-arrow.left");
const rightArrow = document.querySelector(".slider-arrow.right");

let currentSlideIndex = 0; // Track current slide index

// Function to show a specific slide
function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "flex" : "none";
  });
  currentSlideIndex = slideIndex;
}

// Event listener for left arrow click
leftArrow.addEventListener("click", () => {
  const previousSlideIndex =
    currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  showSlide(previousSlideIndex);
});

// Event listener for right arrow click
rightArrow.addEventListener("click", () => {
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length; // Handle looping
  showSlide(nextSlideIndex);
});

// Show the first slide initially
showSlide(currentSlideIndex);

const form = document.querySelector("#contact-us form");
const submitBtn = document.querySelector("#contact-us button");
const nameInput = form.querySelector("input#name");
const year = form.querySelector("select#year");
const mode = form.querySelector("select#status");
const subject = form.querySelector("select#subject");

const phone = "+201022621695";
const lineBreak = encodeURIComponent("\n");

submitBtn.onclick = (e) => {
  e.preventDefault();
  const codedName = encodeURIComponent(nameInput.value.trim());
  const codedYear = encodeURIComponent(year.vlaue);
  const codedStatus = encodeURIComponent(mode.vlaue);
  const codedSubject = encodeURIComponent(subject.vlaue);
  const actoin = `https://wa.me/${phone}?text=${codedName} ${lineBreak} ${codedYear}  ${lineBreak} ${codedStatus}  ${lineBreak} ${codedStatus}`;
  window.open(actoin, "_blank");
};
