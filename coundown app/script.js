"use strict"


const countTo = "31 Dec 2023"

const  c = setInterval(()=> {

const endDate = new Date(countTo)
const currentDate = new Date()

const totalSeconds = (endDate - currentDate)  / 1000;

const days = Math.floor(totalSeconds/3600/24)
const hours = Math.floor(totalSeconds/3600) % 24
const minutes = Math.floor(totalSeconds/60) % 60
const seconds = Math.floor(totalSeconds) % 60

const countDown = document.getElementById("countdown")


countDown.textContent = `${days}Days ${format(hours)} Hours : ${format(minutes)} Minutes : ${format(seconds)} Sec`


if (totalSeconds < 0) {
clearInterval(c)

countDown.textContent = "Happy New Year";

}


}, 1000)


function format(time) {
return time<10 ? `0${time}` : time
}