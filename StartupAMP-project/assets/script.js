AOS.init();

//! scroll event and go-to-top
window.onscroll = function () {
    if (document.documentElement.scrollTop > 60) {
        document.getElementById("nav").className = "test";

        document.getElementById("go-to-top").style.display = "block";
    } else {
        document.getElementById("nav").className = "";
        document.getElementById("go-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//! mobil navbar
let mobil = document.querySelector(".mobil-list");
let mobilBtn = document.querySelector(".mobil-btn");
let closeBtn = document.querySelector(".close-btn");

mobilBtn.addEventListener("click", function () {
    mobil.style.transform = `translateX(0)`;
})

closeBtn.addEventListener("click", function () {
    mobil.style.transform = `translateX(-1500px)`;
})




//! carousel
const btns = document.querySelectorAll(".btn");
const carouselImg = document.querySelector(".carousel-images");
const imgs = document.querySelectorAll(".img");
const inner = document.querySelector(".inner");

const prev = btns[0];
const next = btns[1];

let width = parseInt(window.getComputedStyle(carouselImg).width);
let offset = 0;

next.addEventListener("click", () => {

    if (offset === width * (imgs.length - 1)) {
        offset = 0;
    } else {
        offset = offset + width;
    }

    inner.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener("click", () => {

    if (offset === 0) {
        offset = width * (imgs.length - 1);
    } else {
        offset = offset - width;
    }

    inner.style.transform = `translateX(-${offset}px)`;
});


