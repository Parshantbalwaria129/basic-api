const express = require("express");
var notesRouter = express.Router();
const NoteModel = require("../../db/models/notes.model");

// get note list
notesRouter.get("/", (request, response) => {
  NoteModel.find({})
    .then((notes) => {
      response.json({
        notes,
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

// add new note
notesRouter.post("/", (request, response) => {
  const newNote = new NoteModel(request.body);
  newNote
    .save()
    .then((savedNote) => {
      response.json({
        savedNote,
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

// delete note by id
notesRouter.delete("/:id", (request, response) => {
  const noteId = request.params.id;
  NoteModel.findByIdAndRemove(noteId)
    .then((note) => {
      response.json({
        note,
        success: true,
      });
    })
    .catch((err) => {
      return response.status(404).json({
        err,
        error: "Note not found",
        success: false,
      });
    });
});

// get note by id
notesRouter.get("/:id", (request, response) => {
  const noteId = request.params.id;
  NoteModel.findById(noteId)
    .then((note) => {
      response.json({
        note,
        success: true,
      });
    })
    .catch((err) => {
      return response.status(404).json({
        err,
        error: "Note not found",
        success: false,
      });
    });
});

// Update note by id
notesRouter.put("/:id", (request, response) => {
  const noteId = request.params.id;
  const updatedBody = request.body;
  NoteModel.findByIdAndUpdate(noteId, updatedBody, { new: true })
    .then((note) => {
      response.json({
        updatedNote: note,
        success: true,
      });
    })
    .catch((err) => {
      return response.status(404).json({
        err,
        error: "Note not found",
        success: false,
      });
    });
});

module.exports = {
  notesRouter,
};
