const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbol = "!@#$%^&*()_+}{>?<";


const pLength = document.getElementById("p-length");
const Uppercase = document.getElementById("p-uppercase");
const Lowercase = document.getElementById("p-lowercase");
const pNumbers = document.getElementById("p-numbers");
const psymbol = document.getElementById("p-symbols");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copyBtn = document.getElementById("copy");


submit.addEventListener("click", ()=> {
    let initialPassword = empty

    //ADD CHARACTER IF AN OPTION IS CHECKED
Uppercase.checked ? (initialPassword+= uCase) : ""
Lowercase.checked ? (initialPassword+= lCase) : ""
pNumbers.checked ? (initialPassword+= number) : ""
psymbol.checked ? (initialPassword+= symbol) : ""

password.value = generatePassword(pLength.value, initialPassword)
})

function generatePassword(length, initialPassword) {
    let pass = ""
    for (let i = 0; i < length; i++) {
        pass+= initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        )
    }

    return pass
}

//Copy function

copyBtn.addEventListener("click", ()=> {
    if (password.value == "") {
        alert("Please generate a password")
    } else {
        password.select()
        document.execCommand("copy")
        alert("Password has been copied")
    }
})