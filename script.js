const pages = [...document.querySelectorAll(".page")];
const tabs = [...document.querySelectorAll(".tab-nav button")];
function showPage(index) {
  pages.forEach((page, i) => page.classList.toggle("is-active", i === index));
  tabs.forEach((tab, i) => tab.setAttribute("aria-current", String(i === index)));
  window.scrollTo({top: 0, behavior: "smooth"});
}
tabs.forEach((tab, index) => tab.addEventListener("click", () => showPage(index)));
document.querySelectorAll("[data-next]").forEach((button) => button.addEventListener("click", () => showPage(Number(button.dataset.next))));

const tileButton = document.querySelector("#tile-button");
const chainItems = [...document.querySelectorAll("#chain span")];
tileButton?.addEventListener("click", () => {
  chainItems.forEach((item) => item.classList.remove("lit"));
  chainItems.forEach((item, index) => window.setTimeout(() => item.classList.add("lit"), (index + 1) * 280));
});

document.querySelectorAll(".wall button").forEach((button) => {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
  });
});

const inputs = ["area", "price", "days", "wage"].map((id) => document.querySelector(`#${id}`));
const result = document.querySelector("#result");
function calculate() {
  const values = inputs.map((input) => Number.parseFloat(input?.value));
  if (values.some(Number.isNaN)) {
    result.textContent = "Type your numbers";
    return;
  }
  result.textContent = `Extra cost: ${(values[0] * values[1] + values[2] * values[3]).toLocaleString("en-IN")}`;
}
inputs.forEach((input) => input?.addEventListener("input", calculate));
