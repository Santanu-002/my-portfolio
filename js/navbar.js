/**
 * Navbar module: handles responsive hamburger menu toggling,
 * scroll-based background shading, and dynamic nav link active state highlighting.
 */
export function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("close-btn");
  const quickLinks = document.querySelectorAll(".quick-links a");
  const navbar = document.getElementById("navbar");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.style.display = "block";
    });
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener("click", () => {
      menu.style.display = "none";
    });
  }

  if (quickLinks && menu) {
    quickLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.style.display = "none";
      });
    });
  }

  const desktopLinks = document.querySelectorAll(".nav-links a");

  // Active navigation link highlighting on scroll
  const scrollSections = [
    { id: "home", el: document.querySelector(".intro-section") },
    { id: "about_me", el: document.querySelector("#about_me") },
    { id: "experience", el: document.querySelector("#experience") },
    { id: "education", el: document.querySelector("#education") },
    { id: "skills-section", el: document.querySelector("#skills-section") },
    { id: "projects", el: document.querySelector("#projects") },
    { id: "contact", el: document.querySelector("#contact") }
  ];

  let scrollTick = false;
  window.addEventListener("scroll", () => {
    if (!scrollTick) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Toggle navbar scrolled style
        if (navbar) {
          if (scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        }

        // Active link highlighting
        let currentActiveId = "home";
        scrollSections.forEach((sec) => {
          if (sec.el) {
            const top = sec.el.getBoundingClientRect().top + scrollY;
            if (scrollY >= top - 200) {
              currentActiveId = sec.id;
            }
          }
        });

        desktopLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${currentActiveId}` || (currentActiveId === "home" && href === "#home")) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        scrollTick = false;
      });
      scrollTick = true;
    }
  });
}
