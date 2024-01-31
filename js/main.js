/* About Work */
let programming = document.getElementById("programming");
let research = document.getElementById("research");
let development = document.getElementById("development");
let phases = document.getElementById("phases");

let image = document.getElementById("output_img");

programming.addEventListener("click", () => {
  image.src = "./images/image1.jpg";
  programming.classList.add("active");
  research.classList.remove("active");
  development.classList.remove("active");
  phases.classList.remove("active");
});
research.addEventListener("click", () => {
  image.src = "./images/image2.jpg";
  research.classList.add("active");
  programming.classList.remove("active");
  development.classList.remove("active");
  phases.classList.remove("active");
});

development.addEventListener("click", () => {
  image.src = "./images/image3.jpg";
  development.classList.add("active");
  programming.classList.remove("active");
  research.classList.remove("active");
  phases.classList.remove("active");
});

phases.addEventListener("click", () => {
  image.src = "./images/image4.jpg";
  phases.classList.add("active");
  programming.classList.remove("active");
  research.classList.remove("active");
  development.classList.remove("active");
});

/* Hamburger Menu */
let hamburger = document.getElementById("menu");
let links = document.querySelector(".link__wrapper");
let btn = document.querySelector(".nav_btn__wrapper");
let counter = 0;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("bx-x");

  counter++;
  if (counter % 2 == 0) {
    links.style.display = "none";
    btn.style.display = "none";
  } else {
    links.style.display = "block";
    btn.style.display = "block";
  }
});
