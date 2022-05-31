var burger = document.querySelector(".burger");
var navlink = document.querySelector(".navlink");

burger.onclick = function() {
    navlink.classList.toggle("navlink-active");
    console.log(navlink.classList);
}