const menuIcon = document.querySelector(".menu-icon"),
    navbarNav = document.querySelector(".navbar-nav"),
    quitIcon = document.querySelector(".navbar-nav__icon"),
    scrollButton = document.querySelector(".back-to-top__container"),
    navbar = document.querySelector(".navbar"),
    priceButton = document.querySelector(".price-button");

menuIcon.addEventListener("click", () => navbarNav.style.display = "flex");
quitIcon.addEventListener("click", () => navbarNav.style.display = "none");
window.addEventListener("scroll", () => {
    window.scrollY > 0 ? (scrollButton.style.opacity = "1", navbar.style.backgroundColor = "white") : console.log("white");
});
priceButton.addEventListener("click", () => alert("Message"));
