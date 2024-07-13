const $ = document;
const createNoteBtn = $.querySelector(".createBtn");
const notesContainer = $.querySelector(".notes-list");

const createNote = () => {
  let noteElem = $.createElement("p");
  noteElem.classList.add("notesInput");
  noteElem.setAttribute("contenteditable", "true");

  let delNoteElem = $.createElement("img");
  delNoteElem.setAttribute("src", "images/delete.png");
  delNoteElem.classList.add("del-icone");

  notesContainer.appendChild(noteElem).appendChild(delNoteElem);
  saveNotes();
};

const saveNotes = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

const loadNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  } else if (e.target.tagName == "P") {
    let allNotes = $.querySelectorAll(".notesInput");
    allNotes.forEach((note) => {
      note.addEventListener("keyup", saveNotes);
    });
  }
});

$.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    $.execCommand("insertLineBreak");
    e.preventDefault();
  }
});

createNoteBtn.addEventListener("click", createNote);
window.addEventListener("load", loadNotes);
