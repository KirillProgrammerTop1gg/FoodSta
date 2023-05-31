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