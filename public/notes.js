document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes');
    const noteTitle = document.getElementById('note-title');
    const noteText = document.getElementById('note-text');
    const saveNoteBtn = document.getElementById('save-note');
    const clearFormBtn = document.getElementById('clear-form');
    const newNoteBtn = document.getElementById('new-note');
    
    const getNotes = async () => {
        const response = await fetch('/api/notes');
        const notes = await response.json();
        notesList.innerHTML = notes.map(note => `<li data-id="${note.id}">${note.title}</li>`).join('');
    };
    
    const saveNote = async () => {
        const newNote = {
            title: noteTitle.value,
            text: noteText.value
        };
        await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        });
        getNotes();
        noteTitle.value = '';
        noteText.value = '';
    };
    
    const deleteNote = async (id) => {
        await fetch(`/api/notes/${id}`, {
            method: 'DELETE'
        });
        getNotes();
    };
    
    notesList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const id = e.target.dataset.id;
            deleteNote(id);
        }
    });
    
    saveNoteBtn.addEventListener('click', saveNote);
    clearFormBtn.addEventListener('click', () => {
        noteTitle.value = '';
        noteText.value = '';
    });
    newNoteBtn.addEventListener('click', () => {
        noteTitle.value = '';
        noteText.value = '';
    });
    
    getNotes();
});
