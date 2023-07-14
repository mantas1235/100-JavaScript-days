"use strict"

const btn = document.querySelector(".btn"),
result = document.querySelector(".results"),
reset = document.querySelector(".reset")
const height = document.querySelector(".height")
const weight = document.querySelector(".weight")


btn.addEventListener("click", calBMI);


function calBMI(e) {
    
    e.preventDefault()
    let height = document.querySelector(".height").value
    let weight = document.querySelector(".weight").value


//validae input

if (height=== "" || isNaN(height)) {
    return (result.innerHTML = "Provide a valid height")
}

else if (weight=== "" || isNaN(weight)) {
    return (result.innerHTML = "Provide a valid weight")
}

else {
    height = height/100
let bmi = ((weight/ Math.pow(height, 2)).toFixed(2))

console.log(bmi);

if (bmi<18.5) {
    showResults(`Underwheight: <span>${bmi}</span>`, "orange")
} 
if (bmi>18.5 && bmi<25) {
    showResults(`Normal Weight: <span>${bmi}</span>`, "green")
}
if (bmi>25 && bmi<30) {
    showResults(`Overweight: <span>${bmi}</span>`, "red")
}


if (bmi>30) {
    showResults(`Obese: <span>${bmi}</span>`, "dark red")
}

}
result.style.display = "block"
reset.style.display = "block"


}

function showResults(value,color) {
    result.style.backgroundColor = color
    return (result.innerHTML= value)
}

reset.addEventListener("click", ()=> {
document.querySelector("form").reset()
reset.style.display = "none"
result.style.display = "none"
})

