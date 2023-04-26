const btn = document.querySelector(".get-quotes")
const number = document.getElementById("number")

const api = "https://type.fit/api/quotes"

btn.addEventListener("click", getQuotes)


function getQuotes(e) {
    e.preventDefault()

    if (number.value.length === 0) {
        return alert("Please enter a number")
    } else {
fetch(api)
.then(function (response) {
    return response.json()
})
.then (function (data) {
    // console.log(JSON.stringify(data));

data = shuffle(data)

let output = ""

    for (let i = 0; i < data.length; i++) {
        if (i == number.value) {
            break
        } 
        
        
        output+= `
    <li>Quote: ${data[i].text}</li>
    <li>Author: ${data[i].author}</li>
    <hr>    
        `
        
    }

    document.querySelector(".quotes").innerHTML = output

});

}


    }

    function shuffle(quotes) {
        let CI = quotes.length, tempValue, randomIndex;
        
        
        while(CI>0) {
        randomIndex = Math.floor(Math.random() * CI)
        
        CI--
        
        //SWAP the last eleMENT WITH CI\
        
        
        tempValue = quotes[CI]
        
        quotes[CI] = quotes[randomIndex]
        
        quotes[randomIndex] = tempValue
        
        }
        
        return quotes
        }