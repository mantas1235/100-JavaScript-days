"use strict"



const api =  {
    key: "2c67617a936be5f276a4d08e1c883c74",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search")
const btn = document.querySelector(".btn")



btn.addEventListener("click", getInput)


function getInput(e) {
    e.preventDefault()
    if (e.type == "click") {
        getData(search.value)
console.log(search.value);
    }
}

function getData() {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`).then(response => {
        return response.json();
    }).then(displayData)
}

function displayData(response) {
  if (response.cod === "404") {
    const err = document.querySelector(".error")

    err.textContent = "Please enter A valid city"
search.value = ""



  }

else {
    const city = document.querySelector(".city")
city.innerText = `${response.name} , ${response.sys.country}`

const today = new Date()
const options = {year: 'numeric',month: 'long', weekday: 'long',   day: 'numeric' }
console.log(today);
const date = document.querySelector(".date")

date.innerText = `${today.toLocaleDateString("lt-LT", options)}`



const temp = document.querySelector(".temp")
temp.innerHTML = `Temp: ${Math.round(response.main.temp )}<span>°C</span>`

const weather = document.querySelector(".weather")


weather.innerText = `Weather: ${response.weather[0].main}`
const tempRange = document.querySelector(".temp-range")

tempRange.innerText = ` Temp Range: ${Math.round(response.main.temp_min)} °C / ${Math.round(response.main.temp_max)} °C`



const weatherIcon = document.querySelector(".weather-icon")

const iconURL = "http://openweathermap.org/img/w/"


weatherIcon.src = iconURL + response.weather[0].icon + ".png";

search.value = ""
console.log(response);

if (response.weather[0].main === "Clear") {
   const body =  document.querySelector(".main-container")
   body.style.backgroundImage = "url('./images/sunny.jpg')";
}

}


}
