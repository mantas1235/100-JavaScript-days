"use strict"








const number = document.querySelector(".number")
const buttons = document.querySelector(".buttons")




buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        number.innerHTML++
        colors()
    }
    else if (e.target.classList.contains("subtract")) {
        number.innerHTML--
        colors()
    }
    else if (e.target.classList.contains("reset")) {
        number.innerHTML = 0
        colors()
    }

})

const colors = () => {
    if (number.innerHTML > 0) {
        number.style.color = "greenyellow"
    }
    else if (number.innerHTML < 0) {
        number.style.color = "tomato"
    }
    else (number.style.color = "#fff")
}