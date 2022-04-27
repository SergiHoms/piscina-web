let hamburguer = document.getElementById("hamburger");
let menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguer.classList.toggle("active");
});