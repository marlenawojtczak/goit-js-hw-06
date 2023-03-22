const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (e) => {
  output.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
});
