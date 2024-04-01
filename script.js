"use strict";

const accordion = document.getElementById("accordionFooter");
const footerBottom = document.querySelectorAll(".Footer-bottom");

const mq = window.matchMedia("(max-width: 765px)");

function handleViewportChange(e) {
  if (e.matches) {
    footerBottom.forEach((element) => {
      element.classList.add("hidden");
    });
    accordion.classList.remove("hidden");
  } else {
    footerBottom.forEach((element) => {
      element.classList.remove("hidden");
    });
    accordion.classList.add("hidden");
  }
}

mq.addEventListener("change", handleViewportChange);

handleViewportChange(mq);
