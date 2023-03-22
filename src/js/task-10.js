const boxes = document.getElementById(`boxes`);
const input = document.querySelector(`input[type="number"]`);
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener(`click`, () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
});

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add = "box";
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.margin = "10px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};
