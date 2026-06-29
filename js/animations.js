/**
 * Animations module: handles fade-in entrance transitions via IntersectionObserver
 * and parallax/scroll-opacity effects on page sections.
 */
export function initAnimations() {
  const sections = document.querySelectorAll("section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const children = entry.target.querySelectorAll("*");

        if (entry.isIntersecting) {
          // If section is visible -> animate each child with a delay
          children.forEach((el, i) => {
            setTimeout(() => el.classList.add("show"), i * 200);
          });
        } else {
          // If section goes out of view -> reset
          children.forEach((el) => el.classList.remove("show"));
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
}
