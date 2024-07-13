const $ = document;
const createNoteBtn = $.querySelector(".createBtn")
const notesContainer = $.querySelector('.notes-list')

const createNote = () =>{
    let noteElem = $.createElement('p')
    noteElem.classList.add('notesInput')
    noteElem.setAttribute('contenteditable' , 'true')

    let delNoteElem = $.createElement('img')
    delNoteElem.setAttribute('src' , 'images/delete.png')
    delNoteElem.classList.add('del-icone')
    delNoteElem.addEventListener('click' , delNote)

    notesContainer.appendChild(noteElem).appendChild(delNoteElem)
    saveNotes()
}

const saveNotes = () =>{
    localStorage.setItem('notes' , notesContainer.innerHTML)
}

const loadNotes = () =>{
    notesContainer.innerHTML = localStorage.getItem('notes')
}

const delNote = e =>{
    e.target.parentElement.remove()
    saveNotes()
}

createNoteBtn.addEventListener('click' , createNote)
window.addEventListener('load' , loadNotes)