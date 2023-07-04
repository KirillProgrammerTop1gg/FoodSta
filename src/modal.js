const refsOrder = {
    openOrderBtn: document.querySelector("[data-open-order]"),
    closeOrderBtn: document.querySelector("[data-close-order]"),
    backdropOrder: document.querySelector("[data-overlay-order]"),
  };
  
  refs.openOrderBtn.addEventListener("click", toggleOrder);
  refs.closeOrderBtn.addEventListener("click", toggleOrder);
  refs.backdrop.addEventListener("click", logBackdropClick);
  
function toggleOrder() {
    refs.backdropOrder.classList.toggle("is-hidden");
  }

function logBackdropClick() {
    console.log("Це клік в бекдроп");
  }