const form = document.querySelector("form");

const phone = "+201002657702";
const name = encodeURIComponent("كريم وحيد غانم");
const year = encodeURIComponent("تانيه ثانوي");
const lineBreak = encodeURIComponent("\n");

const actoin = `https://wa.me/${phone}?text=${name} ${lineBreak} ${year}`;
form.onsubmit = (e) => {
  e.preventDefault();
  window.open(actoin, "_blank");
};

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
