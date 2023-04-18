"use strict"

const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")


btn.addEventListener("click", copyText)

function copyText(e) {
    e.preventDefault();

    navigator.clipboard.writeText(coupon.value).then(() => {
        btn.textContent = "Copied"
        setTimeout(() => {
            btn.textContent = "Copy"
        }, 3000)
    })


}