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
  mobileNav.classList.remove("out", "hidden");
  mobileNav.classList.add("in");
  overlay.classList.remove("hidden");
});
const removeMenu = () => {
  mobileNav.classList.add("out");
  mobileNav.classList.remove("in");
  overlay.classList.add("hidden");
  setTimeout(() => {
    mobileNav.classList.add("hidden");
  }, 100);
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
    if (index === currentSlideIndex) {
      slide.classList.add("active", "in");
    } else {
      slide.classList.add("out");
    }
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

year.onchange = () => submitBtn.removeAttribute("disabled");

form.onsubmit = (e) => {
  e.preventDefault();
  const encodedName = encodeURIComponent(nameInput.value.trim());
  const text = `
  السلام عليكم ورحمه الله وبركاته 
  ${lineBreak}
  الاسم:- ${encodedName}
  ${lineBreak}
  العام الدراسي:- ${encodeURI(year.value)}
  ${lineBreak}
  الماده:- ${encodeURI(subject.value)}
  ${lineBreak}
  ${encodeURI(mode.value)}
  `;
  const actoin = `https://wa.me/${phone}?text=${text}`;
  window.open(actoin, "_blank");
};
