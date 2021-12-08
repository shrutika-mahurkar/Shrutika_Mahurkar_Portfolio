const collapsedMenu = document.querySelector(".collapsed-navbar");
const navbarMenu = document.querySelector(".navbar-menu");

collapsedMenu.addEventListener("click",collapsedNavbar);

function collapsedNavbar(){
    collapsedMenu.classList.toggle("active");
    navbarMenu.classList.toggle("active");
}