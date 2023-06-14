//scroll to top

const btn = document.querySelector(".top")

const rootEl = document.documentElement


document.addEventListener("scroll", showBtn)
btn.addEventListener("click", scrollToTop)

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight

if (rootEl.scrollTop/ scrollTotal > 0.3) {
    btn.classList.add("show-btn")
} else {
    btn.classList.remove("show-btn")

}

}


function scrollToTop() {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}