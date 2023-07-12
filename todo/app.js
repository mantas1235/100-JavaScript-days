"use strict"


window.onload = function() {
    displayTask()
}


const input = document.querySelector("input"),
btn = document.querySelector("button"),
todoList = document.querySelector(".todo-list"),
clear = document.querySelector(".clear")
let tasks;


//Get tasks from local storage 
function getTasks() {
   
   if (localStorage.getItem("tasks") === null) {
        tasks= []
    } else {
        tasks=JSON.parse(localStorage.getItem("tasks"))
    }
}



btn.addEventListener("click", addTask)

function addTask(e){
    e.preventDefault()
    if (input.value !== "") {
    addTaskToLS()
    todoList.innerHTML= ""
displayTask();


    }

    else {
alert("Please enter a task")
    }
}


//SAve task to local storage

function addTaskToLS() {
getTasks()

    tasks.push(input.value)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    input.value = ""
}

function displayTask() {
getTasks()

tasks.forEach((task, index) => {
        const newLi = document.createElement("li");
        const btnDelete = document.createElement("button");
        btnDelete.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `

newLi.appendChild(document.createTextNode(task));
newLi.appendChild(btnDelete);
todoList.appendChild(newLi);

});

}

//Delete task function


function deleteTask(index) {
    const del = confirm("You about to delete this task")
        if(del) {
      getTasks();
      }

tasks.splice(index, 1)
localStorage.setItem("tasks", JSON.stringify(tasks))
todoList.innerHTML = ""
displayTask()
    }


    
clear.addEventListener("click", clearTasks)


function clearTasks() {
    const delTasks = confirm("Do you really want to delete all tasks?")

if (delTasks) {
    localStorage.clear()
    todoList.innerHTML = ""
    displayTask()
}


}