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

    notesContainer.appendChild(noteElem).appendChild(delNoteElem)
}
createNoteBtn.addEventListener('click' , createNote)