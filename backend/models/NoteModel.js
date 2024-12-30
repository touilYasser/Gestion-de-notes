const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, 'Titre is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);