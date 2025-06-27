const heroSectionEl = document.querySelector("[data-js-hero]");
const headerEl = document.querySelector("[data-js-header]");
const heroTitleEl = document.querySelector("[data-js-hero-title]");
const paddings = 24;

export const setHeroMargin = () => {
  const headerHeight = headerEl.offsetHeight;
  const titleHeight = heroTitleEl.offsetHeight;
  heroSectionEl.style.marginTop = `calc(100dvh - ${paddings}px - ${headerHeight}px - ${titleHeight}px)`;

  heroSectionEl.style.opacity = 1;
};
