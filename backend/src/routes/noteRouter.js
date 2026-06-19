import express from "express"
import protectRoute from "../middleware/authMiddleware.js";
import {getAllNotes , createNote ,getNoteById, deleteNote , updateNote} from "../controllers/notesControllers.js"
const router = express.Router()

router.get("/",protectRoute,getAllNotes);

router.post("/",protectRoute, createNote);
router.get("/:id",protectRoute, getNoteById);
router.put("/:id",protectRoute, updateNote);
router.delete("/:id", protectRoute, deleteNote);

export default router;