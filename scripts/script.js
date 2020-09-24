document.querySelector(".services").onclick = function () {
    this.classList.toggle("active");
};
let contactUs = document.querySelector(".contact-us");
document.querySelector(".contact").onclick = function () {
    contactUs.style.left = "0";
};
document.querySelector(".contact-us > i").onclick = function () {
    contactUs.style.left = "-420px";
};
