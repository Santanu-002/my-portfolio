/**
 * Skills module: handles loading and animating progress bar indicators
 * within skills progress panels.
 */
export function initSkills() {
  const sets = document.querySelectorAll(".set");

  sets.forEach((set) => {
    // If the progress bar is present, animate its width based on data-progress
    const valueDiv = set.querySelector(".value");
    if (valueDiv) {
      const value = valueDiv.dataset.progress || 0;
      valueDiv.style.width = `${value}%`;
    }
  });
}
