const changeColorBtn = document.querySelector(".change-color");
const displayHEX = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  displayHEX.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
