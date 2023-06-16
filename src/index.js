const refs = {
    openModalBtn: document.querySelector("[data-open-menu]"),
    closeModalBtn: document.querySelector("[data-close-menu]"),
    backdrop: document.querySelector("[data-overlay]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
    console.log("Це клік в бекдроп");
}

const refsOrder = {
    openOrderBtn: document.querySelector("[data-open-order]"),
    closeOrderBtn: document.querySelector("[data-close-order]"),
    backdropOrder: document.querySelector("[data-overlay-order]"),
};

refs.openOrderBtn.addEventListener("click", toggleOrder);
refs.closeOrderBtn.addEventListener("click", toggleOrder);

function toggleOrder() {
    refs.backdropOrder.classList.toggle("is-hidden");
}