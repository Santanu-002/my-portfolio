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

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Active navigation link highlighting on scroll
  const scrollSections = [
    { id: "home", selector: ".intro-section" },
    { id: "experience", selector: "#experience" },
    { id: "education", selector: "#education" },
    { id: "skills-section", selector: "#skills-section" },
    { id: "projects", selector: "#projects" },
    { id: "contact", selector: "#contact" }
  ];

  window.addEventListener("scroll", () => {
    let currentActiveId = "home";
    
    scrollSections.forEach((sec) => {
      const el = document.querySelector(sec.selector);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        // If scrolled past the section top with a small offset
        if (window.scrollY >= top - 200) {
          currentActiveId = sec.id;
        }
      }
    });

    const desktopLinks = document.querySelectorAll(".nav-links a");
    desktopLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentActiveId}` || (currentActiveId === "home" && href === "#home")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}
