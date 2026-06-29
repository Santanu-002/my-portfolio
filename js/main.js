import { initNavbar } from "./navbar.js";
import { initAnimations } from "./animations.js";
import { initSkills } from "./skills.js";
import { initBackToTop } from "./backToTop.js";
import { initProjects } from "./projects.js";

// Add js-loaded class to indicate JS has executed successfully
document.documentElement.classList.add("js-loaded");

function initAll() {
  initNavbar();
  initAnimations();
  initSkills();
  initBackToTop();
  initProjects();
}

// Ensure execution runs when the DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}

