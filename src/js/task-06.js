const input = document.getElementById("validation-input");

input.addEventListener("blur", (e) => {
  e.target.value.length === +input.dataset.length
    ? (input.className = "valid")
    : (input.className = "invalid");
});
console.log(input.dataset.length);
