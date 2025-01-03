const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use('/api/notes', require('./routes/NotesRouter.js'));
app.use('/api/user', require('./routes/UserRouter.js'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(port, () => console.log(`Connected to DB & listening on port ${port}`)); 
    })
    .catch((err) => console.log(err));