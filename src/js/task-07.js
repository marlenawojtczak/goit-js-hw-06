const input = document.getElementById("font-size-control");
const output = document.getElementById("text");

input.addEventListener("input", (e) => {
  output.style.fontSize = e.currentTarget.value + "px";
});
