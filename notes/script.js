const noteBtn = document.getElementById("add-btn"),
noteTitle = document.getElementById("note-title"),
noteText = document.getElementById("note-text"),
clear = document.querySelector(".clear")



function getNotes() {
    let notes = localStorage.getItem("notes")
    if (notes== null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
}


//Note add btn

noteBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    if (noteTitle.value == "" || noteText.value== "") {
     return alert("Please add note title and details")
    }

    getNotes()

    let myObj = {
        title: noteTitle.value,
        text: noteText.value
    }
notesObj.push(myObj)

localStorage.setItem("notes", JSON.stringify(notesObj))


document.querySelector("form").reset()


showNotes()

})

//Display notes on the page

function showNotes() {
    getNotes()
    let html = ""
    notesObj.forEach((element, index) => {
        html+= `
        <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index+1}</p>
          <div class="notes-cta-btn">
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn btn btn-danger btn-lg"><i class="fas fa-trash"></i>Delete</button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn btn btn-success btn-lg"><i class="fas fa-edit"></i>Edit</button>
          </div>
        </div>
        <hr>
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
    </div>
  </div>
        `
    });

let noteEl = document.getElementById("notes")
if (notesObj.length != 0) {
    noteEl.innerHTML = html
} else {
    noteEl.innerHTML = "No notes added. Please add a note"
    
}




}

showNotes()


//Delete a single note

function deleteNote(index) {
    let confirmDelete = confirm("Delete this note?")

if (confirmDelete) {
    getNotes()
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
showNotes()


} else {
    
}

}




clear.addEventListener("click", () => {
    localStorage.clear()
    showNotes()
})



//edit Note 


function editNote(index) {
    if (noteTitle.value !== "" || noteText.value !== "") {
        return alert("Clear the form before editing")
    }

    getNotes()

    noteTitle.value = notesObj[index].title
    noteText.value = notesObj[index].text

    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))

    showNotes()

    
}