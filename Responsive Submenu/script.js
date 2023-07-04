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

else {
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

hideMenu()
}


//Mobile responsive menu

const menu =document.querySelector(".nav-list")
const hamburger =document.querySelector(".hamburger")
const close =document.querySelector(".close")
const wrapper = document.querySelector(".nav-wrapper")


const showMenu = () => {
hamburger.style.display = "none"
close.style.transform = "translateY(0)"
wrapper.style.transform = "translateX(0)"
menu.style.transform = "translateX(0)"

}


const hideMenu = () => {
    hamburger.style.display = "block"
    close.style.transform = "translateY(-20rem)"
    wrapper.style.transform = "translateX(-200%)"
    menu.style.transform = "translateX(-200%)"
}


hamburger.addEventListener("click", showMenu)
close.addEventListener("click", hideMenu)
wrapper.addEventListener("click", hideMenu)



