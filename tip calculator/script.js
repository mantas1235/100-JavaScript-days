"use strict"

const btn = document.querySelector(".btn"),
tip = document.querySelector(".tip"),
total = document.querySelector(".total"),
error = document.querySelector(".error");



const hideError = () => {
    setTimeout(() => {
        error.style.display = "none"
        }, 2000);
        
        }




const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

if(bill === "" || rate === "") {
error.style.display = "block"
hideError()
}

else if (isNaN(bill)) {
error.innerHTML = "Please enter a number";
error.style.display = "block"
hideError()
}


else {
    let tipAmount = (bill * rate).toFixed(1)

    tip.innerHTML = `Tip: $  ${tipAmount}`;


    total.innerHTML =`Total $${Number(tipAmount) + Number(bill)}`
}


}


btn.addEventListener("click", calculateTip)
