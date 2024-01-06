const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// Dark mode, light mode
const btnLight = document.querySelector(".light");
const btnDark = document.querySelector(".dark");

const body = document.querySelector("body");
const header = document.querySelector("header");
const navigace = document.querySelector("nav");

btnDark.addEventListener("click", () => {
  console.log("Druhé tlačítko");
  body.style.backgroundColor = "darkblue";
  body.style.color = "gray";
  body.style.fontSize = "16px";
  nav.style.color = "#fff";
});
btnLight.addEventListener("click", () => {
  console.log("První tlačítko");
  body.style.backgroundColor = "white";
  body.style.color = "black";
  body.style.fontSize = "16px";
});

btnDark.addEventListener("click", () => {
  console.log("Druhé tlačítko");
  header.style.backgroundColor = "darkblue";
});

btnLight.addEventListener("click", () => {
  console.log("První tlačítko");
  header.style.backgroundColor = "white";
});

// Formulář

const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const message = document.querySelector(".message");
const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notPhone = document.querySelector(".notificationPhone");

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  if (fullName.value === "") {
    notName.style.display = "block";
  }
  if (email.value === "") {
    notEmail.style.display = "block";
  }
  if (phone.value === "") {
    notPhone.style.display = "block";
  }
});

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
