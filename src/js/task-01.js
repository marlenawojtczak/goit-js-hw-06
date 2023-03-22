const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2");
  const categoryElements = category.querySelectorAll("li");

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
