$(document).ready(() => {
  const davidiciModal = new bootstrap.Modal(
    document.querySelector(".davidici")
  );
  const davidiciShowModalButton = document.querySelector("#myBtn");
  davidiciShowModalButton.addEventListener("click", (e) =>
    davidiciModal.show()
  );

  const davidiciPortalModel = new bootstrap.Modal(
    document.querySelector(".davidici-portal")
  );
  const davidiciPortalShowModalButton = document.querySelector("#myBtn2");
  davidiciPortalShowModalButton.addEventListener("click", (e) =>
    davidiciPortalModel.show()
  );

  const notesModal = new bootstrap.Modal(document.querySelector(".notes"));
  const notesShowModalButton = document.querySelector("#myBtn3");
  notesShowModalButton.addEventListener("click", (e) => notesModal.show());

  const jazzCornerModal = new bootstrap.Modal(
    document.querySelector(".jazz-corner")
  );
  const jazzCornerShowModalButton = document.querySelector("#myBtn4");
  jazzCornerShowModalButton.addEventListener("click", (e) =>
    jazzCornerModal.show()
  );

  const planetariumModal = new bootstrap.Modal(
    document.querySelector(".planetarium")
  );
  const planetariumShowModalButton = document.querySelector("#myBtn5");
  planetariumShowModalButton.addEventListener("click", (e) =>
    planetariumModal.show()
  );
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
toggleButton.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
  navLinks.classList.add("show-fade-in");
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
