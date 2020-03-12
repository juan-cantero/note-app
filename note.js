const fs = require('fs');
const chalk = require('chalk');

const file = 'notes.json';

function addNote(titleToAdd, bodyToAdd) {

    const notes = loadNotes(file);

    if (hasNote(notes, titleToAdd)) {
        console.log("already has that note")
    } else {
        notes.push({
            title: titleToAdd,
            body: bodyToAdd
        });

        saveNotes(notes);
        console.log('notes added')
    }
}

function removeNote(title) {
    const notes = loadNotes(file);

    if (hasNote(notes, title)) {
        let indexOfNoteToBeRemoved = notes.findIndex(n => n.title === title);
        notes.splice(indexOfNoteToBeRemoved, 1);
        saveNotes(notes);
        console.log("note removed")
    } else {
        console.log("That note doesn't exist");
    }

}

function listNotes() {
    const notes = loadNotes();
    const message = chalk.yellow('Your notes are: ');
    console.log(message);
    notes.forEach(n => console.log(n.title + "\n"));
}

function readNote(title) {
    const notes = loadNotes();
    let noteToRead = notes.find(n => n.title === title);
    if (noteToRead) {
        console.log(chalk.blueBright(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.inverse("There is not any note with that title"));
    }

}

function getNote() {
    const notes = loadNotes();
    const notesString = JSON.stringify(notes);
    return notesString;
}

function loadNotes() {
    try {
        const notesBuffer = fs.readFileSync(file);
        const notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

function saveNotes(notes) {
    const jsonNotes = JSON.stringify(notes);
    fs.writeFileSync(file, jsonNotes);

}

function hasNote(notes, title) {
    const titles = notes.map(n => n.title);
    return titles.some(t => t === title);
}


module.exports = {
    addNote: addNote,
    getNote: getNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}