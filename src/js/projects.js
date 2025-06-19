const linkElText = document.querySelector("[data-js-sibvan-text]");
const speed = 50;

export const changeText = (text) => {
  const arr = [...text];
  if (arr.length === 0) {
    printNewText();
    return;
  }

  arr.pop();
  linkElText.textContent = arr.join("");

  setTimeout(() => {
    changeText(arr);
  }, speed);
};

const printNewText = () => {
  const text = "Вы уже тут".split("");

  let newStr = "";

  text.forEach((letter, index) => {
    setTimeout(() => {
      newStr += letter;
      linkElText.textContent = newStr;
    }, index * speed);
  });
};
