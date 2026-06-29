/**
 * Back to Top module: handles visibility and click events
 * for the floating scroll-to-top button.
 */
export function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  let scrollTick = false;
  window.addEventListener("scroll", () => {
    if (!scrollTick) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
        scrollTick = false;
      });
      scrollTick = true;
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
