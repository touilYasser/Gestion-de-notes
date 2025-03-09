const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use('/api/notes', require('./routes/NotesRouter.js'));

// connexion a la BD
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(port, () => console.log(`Connected to DB & listening on port ${port}`)); 
    })
    .catch((err) => console.log(err));