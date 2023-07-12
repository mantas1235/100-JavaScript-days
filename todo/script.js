"use strict"



const input = document.querySelector("input"),
btn = document.querySelector("button"),
todoList = document.querySelector(".todo-list"),
clear = document.querySelector(".clear")



//add list item


const addTask = (e)=> {
    e.preventDefault()
    const newLi = document.createElement("li");
    const btnDelete = document.createElement("button");

    btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i>'
    

    if (input.value !== "") {
        newLi.textContent = input.value
        newLi.appendChild(btnDelete)
        todoList.appendChild(newLi)
        input.value = "";

    }

    else {
alert("Please enter a task")
    }


    //Delete function
    btnDelete.addEventListener("click", function(){
        const del = confirm("You about to delete this task")
        if(del) {
          const parent = this.parentNode;  
          parent.remove()
        }
    })
}

btn.addEventListener("click", addTask)


clear.addEventListener("click", ()=> {
    todoList.innerHTML = ""
})