document.querySelector(".services").onclick = function () {
    this.classList.toggle("active");
};
let contactUs = document.querySelector(".contact-us");
document.querySelector(".contact").onclick = function () {
    contactUs.style.left = "0";
};
document.querySelector(".contact-us > i").onclick = () =>
    (contactUs.style.left = "-420px");
document.querySelector("header .content button").onclick = function () {
    document.querySelector(".about-us").scrollIntoView({
        behavior: "smooth",
    });
};
let scrollTOTop = document.querySelector(".scroll-to-top");
scrollTOTop.onclick = function () {
    document.documentElement.scrollIntoView({
        behavior: "smooth",
    });
};
window.onscroll = () => {
    if (window.scrollY >= "500") {
        scrollTOTop.style.right = "10px";
    } else {
        scrollTOTop.style.right = "-60px";
    }
};
let vidPopup = document.querySelector(".video-popup");
document.getElementById("openVideo").onclick = () => {
    vidPopup.classList.add("active");
    setTimeout(() => {
        vidPopup.classList.add("fade");
        vidPopup.classList.remove("unfade");
    }, 300);
};
let closePopup = document.querySelector(".close-popup");
closePopup.onclick = () => {
    vidPopup.classList.add("unfade");
    vidPopup.classList.remove("fade");
    setTimeout(() => {
        vidPopup.classList.remove("active");
    }, 300);
};
let openImgPopup = document.querySelectorAll(".img span button"),
    popupImg = document.querySelector(".img-popup");
openImgPopup.forEach((btn) => {
    btn.onclick = () => {
        let imgSrc = btn.parentElement.parentElement.querySelector("img").getAttribute("src")
        popupImg.querySelector("img").src = imgSrc;
        popupImg.style.display = "flex";
        setTimeout(() => {
            popupImg.classList.add("active")
        })
    }
})
document.querySelector(".img-popup span").onclick = () => {
    popupImg.classList.remove("active")
    setTimeout(() => {
        popupImg.style.display = 'none'
    }, 500)
}
let links = document.querySelector("header nav .links")
document.querySelector(".toggle-links").onclick = () => {
    if (links.classList.contains("active")) {
        links.classList.remove("active")
        setTimeout(() => {
            links.style.height = 0
        })
    } else {
        links.classList.add("active");
        setTimeout(() => {
            links.style.height = "auto"
        })
    }
}