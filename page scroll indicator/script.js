const links = document.querySelectorAll(".nav-list li a")
const navList = document.querySelector(".nav-list")

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



// sticky Header

window.addEventListener("scroll", ()=> {
    const header = document.querySelector("header")

    header.classList.toggle("sticky", window.scrollY >0)
})

//Active menu swicher


navList.addEventListener("click", (e)=> {
    e.preventDefault()
const navLi = e.target.parentElement;

    if (navLi.classList.contains("link")) {
       navList.querySelector(".active").classList.remove("active")
       navLi.classList.add("active")
    }
})
window.onscroll = () => scrollProgress()


function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;

    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentge = (currentState / pageHeight) * 100

    const progressBar =  document.querySelector(".progress")

    progressBar.style.visibility = "visible"
    progressBar.style.width = scrollPercentge + "%"


}