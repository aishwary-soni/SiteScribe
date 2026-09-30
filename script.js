const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

const tileButton = document.querySelector("#tile-button");
const chainSteps = [...document.querySelectorAll(".chain-step")];

if (tileButton) {
  tileButton.addEventListener("click", () => {
    chainSteps.forEach((step, index) => {
      window.setTimeout(() => step.classList.add("lit"), index * 380);
    });
  });
}
