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