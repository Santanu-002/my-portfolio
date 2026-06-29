import { initNavbar } from "./navbar.js";
import { initAnimations } from "./animations.js";
import { initSkills } from "./skills.js";
import { initBackToTop } from "./backToTop.js";

function initAll() {
  initNavbar();
  initAnimations();
  initSkills();
  initBackToTop();
}

// Ensure execution runs when the DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}
