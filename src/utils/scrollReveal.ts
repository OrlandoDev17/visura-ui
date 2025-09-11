export function setupScrollReveal({
  revealSelector = "[data-reveal]",
  staggerSelector = "[data-reveal-stagger]",
  childSelector = "[data-reveal-child]",
  delayStep = 100,
  rootMargin = "0px",
  threshold = 0.15,
} = {}) {
  // Animacionn simple
  const revealElements = document.querySelectorAll(revealSelector);
  const simpleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          simpleObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin, threshold }
  );

  revealElements.forEach((element) => simpleObserver.observe(element));

  // Animacion Escalonada
  const staggerContainers = document.querySelectorAll(staggerSelector);
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll(childSelector);

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("reveal-visible");
              }, index * delayStep);
            });
            staggerObserver.unobserve(container);
          }
        });
      },
      { rootMargin, threshold }
    );

    staggerObserver.observe(container);
  });
}
