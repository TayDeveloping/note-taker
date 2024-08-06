const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Promisify the fs.readFile and fs.writeFile methods
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Route to serve the notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// API route to get all notes
app.get('/api/notes', async (req, res) => {
  try {
    const data = await readFileAsync(path.join(__dirname, 'db/db.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json(err);
  }
});

// API route to add a new note
app.post('/api/notes', async (req, res) => {
  try {
    const data = await readFileAsync(path.join(__dirname, 'db/db.json'), 'utf8');
    const notes = JSON.parse(data);
    const newNote = { id: notes.length ? notes[notes.length - 1].id + 1 : 1, ...req.body };
    notes.push(newNote);
    await writeFileAsync(path.join(__dirname, 'db/db.json'), JSON.stringify(notes));
    res.json(newNote);
  } catch (err) {
    res.status(500).json(err);
  }
});

// API route to delete a note
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readFileAsync(path.join(__dirname, 'db/db.json'), 'utf8');
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== parseInt(req.params.id));
    await writeFileAsync(path.join(__dirname, 'db/db.json'), JSON.stringify(notes));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
