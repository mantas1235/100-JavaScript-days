const btn  = document.querySelector(".btn")

const userLocation = document.querySelector(".location")



btn.addEventListener("click", ()=> {
    navigator.geolocation.getCurrentPosition(showPosition)
})


function showPosition(position) {
    userLocation.innerHTML = `
    Latitute: ${position.coords.latitude} <br>
    Longitute: ${position.coords.longitude} <br>
    
    `
}
