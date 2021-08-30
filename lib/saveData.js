// REQUIRE / DEPENDENCIES 🍌 //
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Save {
    write(note) {
        return writeNote("db/db.json", JSON.stringify(note));
    }

    read() {
        return readNote("db/db.json", "utf8");
    }
    async getNotes() {
        const notes = await this.read();
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
            parsedNotes = [];
        }
        return parsedNotes;
    }
    async postNote (note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Not Title nor Text can be Blanketh.");
        }
        const newNote = { title, text, id: uuidv4() };
        // this might not exactly be needed.

        const notes = await this.getNotes();
        const updatedNotes = [...notes, newNote];
        await this.write(updatedNotes);
        return newNote;
    }
    async deleteNote(id) {
        const notes = await this.getNotes();
        const filteredNotes = notes.filter(note => note.id !== id);
        return await this.write(filteredNotes);
    }
};

module.exports = new Save();
// omg did my async / await class thing work?