const closeModalBtn = document.querySelector(".close-modal-btn");
const mobileNav = document.querySelector("header .mobile-nav");
const mobileNavMenuBtn = document.querySelector("header .mobile-menu-btn");
const overlay = document.querySelector("header .overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav .nav-link a");
const arrowUp = document.querySelector("button.arrow-up");
const qoutesContainer = document.querySelector(".qoutes-container");
const slides = qoutesContainer.querySelectorAll(".qoute");
const leftArrow = document.querySelector(".slider-arrow.left");
const rightArrow = document.querySelector(".slider-arrow.right");
const form = document.querySelector("#contact-us form");
const submitBtn = document.querySelector("#contact-us button");
const nameInput = form.querySelector("input#name");
const year = form.querySelector("select#year");
const mode = form.querySelector("select#status");
const subject = form.querySelector("select#subject");
const qouteYCordinate = document.querySelector("section#qoutes").scrollHeight;

// funcitonalities of mobile nav
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
mobileNavLinks.forEach((el) => {
  el.addEventListener("click", () => {
    removeMenu();
  });
});
closeModalBtn.onclick = removeMenu;
overlay.onclick = removeMenu;

// functionalities of qoutes slider
let currentSlideIndex = 0;
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
leftArrow.addEventListener("click", () => {
  const previousSlideIndex =
    currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  showSlide(previousSlideIndex);
});
rightArrow.addEventListener("click", () => {
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(nextSlideIndex);
});
showSlide(currentSlideIndex);

// functionalities of contact us form
const phone = "+201022621695";
const lineBreak = encodeURIComponent("\n");
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

// functoinlaities of arrow up
arrowUp.addEventListener("click", (e) => {
  scrollTo(0, 0);
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= qouteYCordinate) {
    arrowUp.classList.remove("out", "hidden");
  } else {
    arrowUp.classList.add("out");
    setTimeout(() => {
      arrowUp.classList.add("hidden");
    }, 400);
  }
});

const mobileTableRows = document.querySelectorAll(
  "section#table table.mobile tr"
);
const desktopTableRows = document.querySelectorAll(
  "section#table table.desktop tr"
);
const tableSubjectInput = document.querySelector(
  "section#table form #table-subject"
);
tableSubjectInput.onchange = (e) => {
  if (window.innerWidth <= 800) {
    switch (tableSubjectInput.value) {
      case "chem":
        mobileTableRows.forEach((el) => {
          el.children[1].classList.remove("hidden");
        });
        mobileTableRows.forEach((el) => {
          el.children[2].classList.add("hidden");
        });
        break;
      case "physics":
        mobileTableRows.forEach((el) => {
          el.children[2].classList.remove("hidden");
        });
        mobileTableRows.forEach((el) => {
          el.children[1].classList.add("hidden");
        });
        break;
      default:
        mobileTableRows.forEach((el) => {
          el.children[2].classList.remove("hidden");
        });
        mobileTableRows.forEach((el) => {
          el.children[1].classList.remove("hidden");
        });
        break;
    }
  } else {
    switch (tableSubjectInput.value) {
      case "chem":
        desktopTableRows[1].classList.remove("hidden");
        desktopTableRows[2].classList.add("hidden");
        break;
      case "physics":
        desktopTableRows[2].classList.remove("hidden");
        desktopTableRows[1].classList.add("hidden");
        break;
      default:
        desktopTableRows[2].classList.remove("hidden");
        desktopTableRows[1].classList.remove("hidden");
        break;
    }
  }
};
