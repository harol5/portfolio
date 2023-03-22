$(document).ready(() => {
  $("#myBtn").click(() => {
    $("#myModal").modal({ backdrop: true });
  });
  $("#myBtn2").click(() => {
    $("#myModal2").modal({ backdrop: true });
  });
  $("#myBtn3").click(() => {
    $("#myModal3").modal({ backdrop: true });
  });
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
toggleButton.addEventListener("click", (e) => {
  console.log(e);
  navLinks.classList.toggle("active");
});

const navBar = document.querySelector(".nav-bar");
const about = document.querySelector(".about-section");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navBar.classList.add("nav-scroll");
  } else if (window.scrollY <= 150) {
    navBar.classList.remove("nav-scroll");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    about.classList.add("fade-in-front");
  }
});
