function comprar() {
  alert("Compra simulada! Em breve disponível.");
}
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}


setInterval(nextSlide, 4000);


showSlide(currentIndex);
const toggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebarMenu");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggle.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
  const isClickInsideMenu = sidebar.contains(event.target);
  const isClickOnToggle = toggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    sidebar.classList.remove("active");
    toggle.classList.remove("hidden");
  }
});

var email = document.getElementById('eu')
var senha = document.getElementById('senha')