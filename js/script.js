const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closemenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", showed);
closemenu.addEventListener("click", closed);

function showed() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function closed() {
  mainMenu.style.top = "-100%";
}
