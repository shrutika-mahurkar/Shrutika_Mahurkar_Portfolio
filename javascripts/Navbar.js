const collapsedMenu = document.querySelector(".collapsed-navbar");
const navbarMenu = document.querySelector(".navbar-menu");

collapsedMenu.addEventListener("click",collapsedNavbar);

function collapsedNavbar(){
    collapsedMenu.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    document.body.classList.add("overflow_hidden");
    // document.getElementById("main").style.pointerEvents="none";
    if(collapsedMenu.classList.contains("active")){
        document.getElementById("main").style.pointerEvents="none";
    }
    else{
        document.getElementById("main").style.pointerEvents="auto";
    }
}

