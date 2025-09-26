const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Multiple Header Image
const headerimg = document.querySelectorAll(".headerimg");
console.log(headerimg);

let headerCount = 0;

setInterval(() => {
  // hide all first
  headerimg.forEach((img) => img.classList.add("hidden"));

  // increment counter
  headerCount++;
  if (headerCount >= headerimg.length) {
    headerCount = 0; // loop back
  }

  // show the current one
  console.log(headerCount);
  headerimg[headerCount].classList.remove("hidden");

  // or switch src if you’re using a single <img>
  // aboutImg.src = `assets/headerimg-${headerCount}.jpg`;
}, 4000);
//-------------

// Multiple Image displa Near school Anthem
const aboutImg = document.querySelectorAll(`.about__img`);
let loopCount = 0; // start at first image

setInterval(() => {
  // hide all images
  aboutImg.forEach((img) => img.classList.add("hidden"));

  // increment counter
  loopCount++;
  if (loopCount >= aboutImg.length) {
    loopCount = 0; // loop back to first
  }

  // show current image
  aboutImg[loopCount].classList.remove("hidden");
}, 5000);

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
