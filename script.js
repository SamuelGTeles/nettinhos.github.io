const homeBtn = document.getElementById("homeBtn");
const servicesBtn = document.getElementById("servicesBtn");
const homeSection = document.getElementById("homeSection");
const servicesSection = document.getElementById("servicesSection");

homeBtn.addEventListener("click", () => {
  homeSection.classList.add("active");
  servicesSection.classList.remove("active");
  homeBtn.classList.add("active");
  servicesBtn.classList.remove("active");
});

servicesBtn.addEventListener("click", () => {
  servicesSection.classList.add("active");
  homeSection.classList.remove("active");
  servicesBtn.classList.add("active");
  homeBtn.classList.remove("active");
});