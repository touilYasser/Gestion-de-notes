const express = require('express');
const router = express.Router();
const { getNotes, createNote, getSingleNote, updateNote, deleteNote } = require('../controllers/NotesController');


router.get('/', getNotes);

router.post('/', createNote);

router.get('/:id', getSingleNote);

router.put('/:id', updateNote) 

router.delete('/:id', deleteNote);

module.exports = router;