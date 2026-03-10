const boton = document.getElementById("menu-toggle");
const menu = document.querySelector(".fondo");

if (boton && menu) {
    boton.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}
