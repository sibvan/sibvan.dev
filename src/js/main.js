import { setHeroMargin } from "./hero.js";
import { changeText } from "./projects.js";
const linkEl = document.querySelector("[data-js-sibvan]");

window.addEventListener("resize", setHeroMargin);
window.addEventListener("load", () => {
  document.querySelector(".burqa").style.opacity = 0;
  setHeroMargin();
});
linkEl.addEventListener("click", (clickEvent) => {
  clickEvent.preventDefault();
  changeText(linkEl.textContent.slice(0, -2));
});
