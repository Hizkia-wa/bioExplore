// JavaScript for BioExplore

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseenter", () => {
        const menu = dropdown.querySelector(".dropdown-menu");
        menu.style.display = "block";
        menu.style.opacity = 0;
        setTimeout(() => menu.style.opacity = 1, 10);
    });

    dropdown.addEventListener("mouseleave", () => {
        const menu = dropdown.querySelector(".dropdown-menu");
        menu.style.opacity = 0;
        setTimeout(() => menu.style.display = "none", 300);
    });
});
