const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const quickLinks = document.querySelectorAll(".quick-links a");
hamburger.addEventListener("click", function () {
  menu.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  menu.style.display = "none";
});

quickLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.style.display = "none";
  });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const sets = document.querySelectorAll(".set");

sets.forEach((set) => {
  const valueDiv = set.querySelector(".set .value");
  const value = valueDiv.dataset.progress;
  valueDiv.style.width = value + "%";
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const children = entry.target.querySelectorAll("*");

      if (entry.isIntersecting) {
        // If section is visible → animate each child with a delay
        children.forEach((el, i) => {
          setTimeout(() => el.classList.add("show"), i * 200);
        });
      } else {
        // If section goes out of view → reset
        children.forEach((el) => el.classList.remove("show"));
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach((section, i) => {
    const offsetTop = i * windowHeight;
    const progress =
      1 - Math.min(Math.max((scrollY - offsetTop) / windowHeight, 0), 1);
    section.style.opacity = progress;
  });
});
