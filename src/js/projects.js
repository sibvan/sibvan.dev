export class TextChanger {
  linkEl = document.querySelector("[data-js-sibvan]");
  linkElText = document.querySelector("[data-js-sibvan-text]");
  speed = 100;

  constructor() {
    this.bindEvents();
  }

  deleteText = (arr) => {
    if (arr.length === 0) {
      this.printNewText();
      return;
    }

    arr.pop();
    this.linkElText.textContent = arr.join("");

    setTimeout(() => {
      this.deleteText(arr);
    }, this.speed);
  };

  printNewText = () => {
    const text = "Вы уже тут".split("");

    let newStr = "";

    text.forEach((letter, index) => {
      setTimeout(() => {
        newStr += letter;
        this.linkElText.textContent = newStr;
      }, index * this.speed);
    });
  };

  bindEvents() {
    this.linkEl.addEventListener("click", (clickEvent) => {
      clickEvent.preventDefault();
      this.deleteText(this.linkElText.textContent.split(""));
    });
  }
}
