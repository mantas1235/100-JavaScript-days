// console.log(window);



// console.log(Object.getOwnPropertyNames(window));




// window.localStorage.setItem("key", "value");
const name = window.localStorage.setItem("FirstName", "Mantas");

localStorage.setItem("lastName", "San")


const person = {
    fullName: "Mantas San",
    age: 31,
    location: "Kaunas"
}


localStorage.setItem("user", JSON.stringify(person))

const fruits = ["Apple", "banana", "Mango", "pear"]

localStorage.setItem("fruits", JSON.stringify(fruits))

//Get item from local storage


console.log(localStorage.getItem("FirstName"));



//REMOVE item from local storage


localStorage.removeItem("fruits")

localStorage.clear()

localStorage.setItem("name", "Mantas")
localStorage.setItem("age", "31")
console.log(localStorage.key(0));
