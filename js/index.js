const menuIcon = document.getElementById("hamburger__icon");
const headerMenu = document.getElementById("menu");
const headerMenuLinks = document.querySelectorAll(".header__link");

menuIcon.addEventListener("click", (e) => {
  if ((headerMenu.style.display = "none")) {
    headerMenu.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    headerMenu.style.display = "none";
  }
});

headerMenuLinks.forEach((headerMenuLink) => {
  headerMenuLink.addEventListener("click", (e) => {
    headerMenu.style.display = "none";
    menuIcon.style.display = "block";
  });
});
