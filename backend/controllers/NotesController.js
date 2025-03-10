const Note = require('../models/NoteModel');


const getNotes = async(req, res) => {
    try {
        const notes = await Note.find();
        if (!notes) {
            return res.status(400).json({ error: "Pas de notes" });
        }
        res.status(200).json(notes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


const createNote = async (req, res) => {
    const { titre, description } = req.body;
    try {
        if (!titre || !description) {
            return res.status(400).json({ error: "Veuillez remplir tous les champs" });
        }
        const note = await Note.create({ titre, description });
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


const getSingleNote = async(req, res) => {
    const id = req.params.id
    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(400).json({ error: "Pas de notes" });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// modifier note
const updateNote = async (req, res) => {
    const id = req.params.id;
    const { titre, description } = req.body;
    try {
        const note = await Note.findByIdAndUpdate(id, { titre, description });
        if (!note) {
            return res.status(400).json({ error: "Pas de notes" });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({ error: err.message });
   }
}

const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(400).json({ error: "No note found" });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getNotes,
    createNote,
    getSingleNote,
    updateNote,
    deleteNote
}