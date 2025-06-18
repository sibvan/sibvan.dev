export class HeroMarginSetter {
  heroSectionEl = document.querySelector("[data-js-hero]");
  headerEl = document.querySelector("[data-js-header]");
  heroTitleEl = document.querySelector("[data-js-hero-title]");

  constructor() {
    this.bindEvents();
  }

  setHeroMargin = () => {
    const headerHeight = this.headerEl.offsetHeight;
    const paddings = 24;
    const titleHeight = this.heroTitleEl.offsetHeight;
    this.heroSectionEl.style.marginTop = `calc(100dvh - ${paddings}px - ${headerHeight}px - ${titleHeight}px)`;
    this.heroSectionEl.style.opacity = 1;
  };

  bindEvents() {
    window.addEventListener("resize", this.setHeroMargin);
    window.addEventListener("load", this.setHeroMargin);
  }
}
