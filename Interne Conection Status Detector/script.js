"use strict"


const image = document.getElementById("image")
const statusDisplay = document.getElementById("status")
const bgColor = document.getElementById("main")


function setColor() {
    bgColor.classList.add("online")
}



async function connectionStatus () {
    try {
        const fetchResults = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png?time=" + (new Date()).getTime())
    image.src = "./images/online.jpg"
    setColor()
    return fetchResults.status >=200 && fetchResults < 300 
    
    } catch (error) {
        // console.log(error);

statusDisplay.textContent = "OOPS!!! you have no internet"

image.src = "./images/offline.png"
bgColor.classList.remove("online")
    }
}


//MONITOR CONNECTION 


setInterval(async () => {
    const result = await connectionStatus()
    if (result) {
        statusDisplay.textContent= "You are online Conection looks good"
        setColor();
    }
}, 5000)


// check connection when the page loads

window.addEventListener("load", async(event) => {
if(connectionStatus()) {
    statusDisplay.textContent= "You are online"
    setColor();
}
else {
    statusDisplay.textContent= "You are offline"
}
})