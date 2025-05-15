document.addEventListener("DOMContentLoaded", () => {
    const noteText = document.getElementById("noteText");
    const addNoteButton = document.getElementById("addNote");
    const notesContainer = document.getElementById("notesContainer");

    let noteCount = 0;

    addNoteButton.addEventListener("click", () => {
        const noteContent = noteText.value.trim();

        if(noteContent === "")
            return;

        console.log(noteContent);

        const note = document.createElement("div");
        note.classList.add("note");

        noteCount++;

        note.innerHTML = `
            <button class="delete-btn">X</button>
            <p>${noteContent}</p>
        `

        notesContainer.appendChild(note);
        noteText.value = "";

        note.querySelector(".delete-btn").addEventListener("click", () => {
            note.remove()
        });
    });

});