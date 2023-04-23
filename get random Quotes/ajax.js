const btn = document.querySelector(".get-quotes")
const number = document.getElementById("number")



btn.addEventListener("click", getQuotes)


function getQuotes(e) {
    e.preventDefault()

if (number.value.length === 0) {
    return alert("Please enter a number")
} else {
    const https = new XMLHttpRequest()

    https.open("GET", "https://type.fit/api/quotes", true)

    https.onload= function () {
        
if (this.status=== 200) {


    // console.log(this.responseText);

const response = JSON.parse(this.responseText)

let output = ""

// response.forEach(ele => {
//     output+= `
// <li>Quote: ${ele.text}</li>
// <li>Author: ${ele.author}</li>
// <hr>    
//     `
// });


for (let i = 0; i < response.length; i++) {
    if (i == number.value) {
        break
    } 
    
    
    output+= `
<li>Quote: ${response[i].text}</li>
<li>Author: ${response[i].author}</li>
<hr>    
    `
    
}

document.querySelector(".quotes").innerHTML = output

}
    }
https.send()

}


   

}