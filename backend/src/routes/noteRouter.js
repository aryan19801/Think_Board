import express from "express"
import {getAllNotes , createNote ,getNoteById, deleteNote , updateNote} from "../controllers/notesControllers.js"
const router = express.Router()

router.get("/",getAllNotes);

router.post("/", createNote);
router.get("/:id",getNoteById);
router.put("/:id",updateNote);
router.delete("/:id", deleteNote);

export default router;