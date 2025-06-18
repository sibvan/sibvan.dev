export class YearChanger {
  isRunning = false;
  target = document.querySelector("[data-js-year]");
  lastUpdate = 0;
  animationId;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isRunning) {
          this.isRunning = true;
          this.lastUpdate = 0;
          this.animationId = requestAnimationFrame(this.step);
        } else if (!entry.isIntersecting && this.isRunning) {
          this.isRunning = false;
          cancelAnimationFrame(this.animationId);
          this.target.textContent = `2025–20**`;
        }
      });
    },
    {
      threshold: 1,
    }
  );

  constructor() {
    this.bindEvents();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setRandomYear = () => {
    this.target.textContent = `2025–20${this.getRandomInt(26, 99)}`;
  };

  step = (timestamp) => {
    if (timestamp - this.lastUpdate >= 200) {
      this.lastUpdate = timestamp;
      this.setRandomYear();
    }
    this.animationId = requestAnimationFrame(this.step);
  };

  bindEvents() {
    this.observer.observe(this.target);
  }
}
