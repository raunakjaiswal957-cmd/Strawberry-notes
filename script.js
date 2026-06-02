document.getElementById('notesForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload hone se rokne ke liye

    // Input fields se data nikalna
    const title = document.getElementById('noteTitle').value;
    const desc = document.getElementById('noteDesc').value;
    const link = document.getElementById('noteLink').value;

    // Naya Note Card HTML taiyar karna
    const notesContainer = document.getElementById('notesContainer');
    
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    noteCard.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${link}" target="_blank" class="download-btn">View / Download Note</a>
    `;

    // Card ko container me jodna
    notesContainer.appendChild(noteCard);

    // Form ko wapas khaali (reset) karna
    document.getElementById('notesForm').reset();
});
