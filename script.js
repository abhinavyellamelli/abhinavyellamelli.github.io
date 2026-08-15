// =========================================================
// MOBILE MENU
// =========================================================

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");


if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}