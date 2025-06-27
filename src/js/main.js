import { setHeroMargin } from "./hero.js";
import { changeText } from "./projects.js";
const linkEl = document.querySelector("[data-js-sibvan]");
document.querySelector(".burqa").style.opacity = 0;

window.addEventListener("resize", setHeroMargin);
window.addEventListener("load", setHeroMargin);
linkEl.addEventListener("click", (clickEvent) => {
  clickEvent.preventDefault();
  changeText(linkEl.textContent.slice(0, -2));
});
