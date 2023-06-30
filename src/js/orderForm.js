const refsOrder = {
  openOrderBtns: document.querySelectorAll("[data-open-order]"),
  closeOrderBtn: document.querySelector("[data-close-order]"),
  backdropOrder: document.querySelector("[data-overlay-order]"),
};

refsOrder.openOrderBtns.forEach((btn) => {
  btn.addEventListener("click", toggleOrder);
});
refsOrder.closeOrderBtn.addEventListener("click", toggleOrder);

function toggleOrder() {
  refsOrder.backdropOrder.classList.toggle("is-hidden");
}