const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const imagesHTML = images
  .map(
    (image) =>
      `<li><img class="image" src= ${image.url} alt= ${image.alt} style="height: 200px"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imagesHTML);

//stylowanie
gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.justifyContent = "center";
gallery.style.gap = "10px";
gallery.style.flexWrap = "wrap";
