const menuIcon = document.querySelector(".menu-icon")
const navbarNav = document.querySelector(".navbar-nav")
const quitIcon = document.querySelector(".navbar-nav__icon")
const scrollButton = document.querySelector(".back-to-top__container")
const navbar = document.querySelector(".navbar")



menuIcon.addEventListener("click", () => {
    navbarNav.style.display = "flex";
})

quitIcon.addEventListener("click", () => {
    navbarNav.style.display = "none"
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        scrollButton.style.opacity = "1"
        navbar.style.backgroundColor = "white";
    }
})