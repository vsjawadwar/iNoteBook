const express = require('express');
const router = express.Router();
let fetchuser = require('../Middleware/fetchuser');
const Note = require("../Models/Note");
const { body, validationResult } = require('express-validator');

// Route 1: Fetch all notes using GET "/api/notes/". Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error: Some error occured");
    }
});

//Route 2: Add n new note by using: POST "/api/notes/addnote". Login Required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid email').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 10 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error: Some error occured");
    }

});

//Route 3: Update an existing note by using: PUT "/api/notes/updatenote". Login Required
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Enter a valid email').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 10 })
], async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        //create new note object
        const newNote = {};
        if (title) {
            newNote.title = title
        }
        if (description) {
            newNote.description = description
        }
        if (tag) {
            newNote.tag = tag
        }
        //Find the note to be updated and update it.
        let note = await Note.findById(req.params.id); //Need to use await or else it will goes to next line we will get error because of undefined value.
        if (!note) {
            return res.status(401).send("Not Found");
        }
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error: Some error occured");
    }
});

//Route 4: Delete an existing note by using: DELETE "/api/notes/deletenote". Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //Find the note to be deleted and delete it.
        let note = await Note.findById(req.params.id); //Need to use await or else it will goes to next line we will get error because of undefined value.
        if (!note) {
            return res.status(401).send("Not Found");
        }
        //Allow deletion only if that not was created by same logged user
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Sucess": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error: Some error occured");
    }
});
module.exports = router;