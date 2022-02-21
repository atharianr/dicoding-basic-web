const navMenu = document.getElementById("nav-menu");
const buttonOpen = document.querySelector(".fa-bars");
const buttonClose = document.querySelector(".fa-times");

function showMenu() {
    navMenu.style.right = "0";
}

function hideMenu() {
    navMenu.style.right = "-200px";
}

buttonOpen.addEventListener('click', function(event) {
    showMenu()
});

buttonClose.addEventListener('click', function(event) {
    hideMenu()
});