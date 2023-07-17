let today = new Date()


function getDate(d) {
    let months = [
        "Jan",
        "feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Dec"

    ]
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let day = days[d.getDay()]
let date = d.getDate()
let month = months[d.getMonth()]
let year = d.getFullYear()


return `${day}, ${date} ${month} ${year}`;

}


let date = document.querySelector(".date")

date.innerHTML = getDate(today)


//Get time



function showTime() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let session  = "AM"


//Apend zero to single digits

hour = hour<10 ? "0" + hour : hour
minutes = minutes<10 ? "0" + minutes : minutes
seconds = seconds<10 ? "0" + seconds : seconds


let time = `${hour}:${minutes}:${seconds}` 
document.querySelector(".time").innerHTML = time


}

setInterval(showTime, 1000)