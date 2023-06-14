const links = document.querySelectorAll(".nav-list li a")
const btn = document.querySelector(".scroll")
const rootEl = document.documentElement





document.addEventListener("scroll", showBtn)
btn.addEventListener("click", scrollToTop)

function showBtn() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight

if (rootEl.scrollTop/ scrollTotal > 0.3) {
    btn.classList.add("showBtn")
}

else{
    btn.classList.remove("showBtn")
}


}



function scrollToTop() {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}





for (const link of links) {

    link.addEventListener("click", smoothScroll)
    
}



function smoothScroll(e) {
    e.preventDefault()

const href = this.getAttribute("href")


document.querySelector(href).scrollIntoView({
    behavior: "smooth"
}
)
}
