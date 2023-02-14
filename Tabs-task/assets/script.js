const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");
const inner3 = document.querySelector(".inner3");
const inner4 = document.querySelector(".inner4");

const butto1 = document.querySelector(".btn1");
const butto2 = document.querySelector(".btn2");
const butto3 = document.querySelector(".btn3");
const butto4 = document.querySelector(".btn4");

butto1.addEventListener("click", function () {
    if (inner1.style.display == "none") {
        inner1.style.display = "flex";
        inner2.style.display = "none";
        inner3.style.display = "none";
        inner4.style.display = "none";
    } else {
        inner1.style.display = "none";
    }
})

butto2.addEventListener("click", function () {
    if (inner2.style.display == "none") {
        inner2.style.display = "flex";
        inner1.style.display = "none";
        inner3.style.display = "none";
        inner4.style.display = "none";
    } else {
        inner2.style.display = "none";
    }
})

butto3.addEventListener("click", function () {
    if (inner3.style.display == "none") {
        inner3.style.display = "flex";
        inner1.style.display = "none";
        inner2.style.display = "none";
        inner4.style.display = "none";
    } else {
        inner3.style.display = "none";
    }
})

butto4.addEventListener("click", function () {
    if (inner4.style.display == "none") {
        inner4.style.display = "flex";
        inner1.style.display = "none";
        inner2.style.display = "none";
        inner3.style.display = "none";
    } else {
        inner4.style.display = "none";
    }
})

