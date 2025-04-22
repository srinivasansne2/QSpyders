let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}
