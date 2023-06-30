const e={openOrderBtns:document.querySelectorAll("[data-open-order]"),closeOrderBtn:document.querySelector("[data-close-order]"),backdropOrder:document.querySelector("[data-overlay-order]")};function r(){e.backdropOrder.classList.toggle("is-hidden")}e.openOrderBtns.forEach((e=>{e.addEventListener("click",r)})),e.closeOrderBtn.addEventListener("click",r);
//# sourceMappingURL=index.c2a7ba1c.js.map
