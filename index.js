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

const playerPriceList = new YT.Player("player-davidici", {
  height: "590",
  width: "1000",
  videoId: "7AKZ_CX2g_s",
  playerVars: {
    playsinline: 1,
    autoplay: 1,
  },
});

const playerSupport = new YT.Player("player-davidici-support", {
  height: "590",
  width: "1000",
  videoId: "WC28VSnc0yo",
  playerVars: {
    playsinline: 1,
    autoplay: 1,
  },
});

const playerTrackPod = new YT.Player("player-davidici-track-pod", {
  height: "590",
  width: "1000",
  videoId: "Smnk-QXC5po",
  playerVars: {
    playsinline: 1,
    autoplay: 1,
  },
});

const playerNotes = new YT.Player("player-notes", {
  height: "590",
  width: "1000",
  videoId: "F5KwYgEmS1s",
  playerVars: {
    playsinline: 1,
    autoplay: 1,
  },
});

// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }
