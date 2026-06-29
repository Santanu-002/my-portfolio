/**
 * Animations module: handles fade-in entrance transitions via IntersectionObserver
 * and parallax/scroll-opacity effects on page sections.
 */
export function initAnimations() {
  const sections = document.querySelectorAll("section");
  if (!sections.length) return;

  const timeouts = new Map();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id || entry.target.className;
        const children = Array.from(entry.target.children);

        // Clear any pending timeouts for this section to prevent race conditions
        if (timeouts.has(sectionId)) {
          timeouts.get(sectionId).forEach((t) => clearTimeout(t));
          timeouts.delete(sectionId);
        }

        if (entry.isIntersecting) {
          const sectionTimeouts = [];
          children.forEach((el, i) => {
            const t = setTimeout(() => el.classList.add("show"), i * 200);
            sectionTimeouts.push(t);
          });
          timeouts.set(sectionId, sectionTimeouts);
        } else {
          children.forEach((el) => el.classList.remove("show"));
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
}
