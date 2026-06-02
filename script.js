// 1. Page load hote hi pehle se saved notes ko check karna aur show karna
document.addEventListener('DOMContentLoaded', displayNotes);

// Form submit event listener
document.getElementById('notesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Input fields se data nikalna
    const title = document.getElementById('noteTitle').value;
    const desc = document.getElementById('noteDesc').value;
    const link = document.getElementById('noteLink').value;

    // Ek note ka object banana
    const note = { title, desc, link };

    // Note ko LocalStorage me save karna
    saveNoteToLocalStorage(note);

    // Note ko screen par dikhana
    addNoteToDOM(note);

    // Form ko reset karna
    document.getElementById('notesForm').reset();
});

// Function: Note ko screen (UI) par add karne ke liye
function addNoteToDOM(note) {
    const notesContainer = document.getElementById('notesContainer');
    
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    noteCard.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.desc}</p>
        <a href="${note.link}" target="_blank" class="download-btn">View / Download Note</a>
    `;

    notesContainer.appendChild(noteCard);
}

// Function: Note ko LocalStorage me save karne ke liye
function saveNoteToLocalStorage(note) {
    let notes = getNotesFromLocalStorage();
    notes.push(note);
    localStorage.setItem('myNotes', JSON.stringify(notes));
}

// Function: LocalStorage se saare notes nikalne ke liye
function getNotesFromLocalStorage() {
    let notes;
    if (localStorage.getItem('myNotes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('myNotes'));
    }
    return notes;
}

// Function: Saved notes ko screen par load karne ke liye
function displayNotes() {
    let notes = getNotesFromLocalStorage();
    notes.forEach(function(note) {
        addNoteToDOM(note);
    });
}
