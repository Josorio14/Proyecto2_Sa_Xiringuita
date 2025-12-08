document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menu-btn");    // Selecciona el botón de menú por su ID
    const nav = document.querySelector("nav"); 

    btn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});
