const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const yearSpan = document.getElementById("year");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}