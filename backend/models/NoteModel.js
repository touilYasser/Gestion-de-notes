const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, 'Titre est obligatoire'],
    },
    description: {
        type: String,
        required: [true, 'Description est obligatoire'],
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);