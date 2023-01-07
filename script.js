const navbarNav = document.querySelector(".navbar-nav");
const innerMenu = document.querySelectorAll(".inner-menu");
const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-button");

hamburgerButton.onclick = () => {
  navbarNav.classList.add("show-nav");
  hamburgerButton.style.display = "none";
  closeButton.style.display = "block";
}

closeButton.onclick = () => {
  navbarNav.classList.remove("show-nav");
  closeButton.style.display = "none";
  hamburgerButton.style.display = "block";
  for (let idx = 0; idx < innerMenu.length; idx++) {
    innerMenu[idx].classList.remove("show-inner-menu");
  }
}

function showDropDown(index) {
    for (let idx = 0; idx < innerMenu.length; idx++) {
      innerMenu[idx].classList.remove("show-inner-menu");
    }
    innerMenu[index].classList.add("show-inner-menu");
  console.log(innerMenu);
}