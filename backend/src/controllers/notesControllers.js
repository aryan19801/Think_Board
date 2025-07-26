import Note from "../models/Note.js";
export async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt: -1});
        // to make the newly created notes appear first when all notes are being displayed
        res.status(200).json(notes);
    } catch(error){
        console.log("Error in getallNotes controller", error);
        res.status(500).json({message : "Internal server error "});
    }
}
export async function createNote(req,res){
     try{
        const {title, content} = req.body
        const newNote = new Note ({title:title, content : content})
       const savedNote = await newNote.save();
        res.status(201).json(savedNote)
     }catch(error){
        console.log("Error in createNote controller", error);
        res.status(500).json({message : "Internal server error "});
    }
}
export async function deleteNote(req,res){
    try { const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully !"})
    } catch (error) {
        console.log("Error in deleteNote controller", error);
        res.status(500).json({message : "Internal server error "});
    }
}
export async function updateNote(req,res){
    try { const {title,content}  = req.body;
         const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,});
        if(!updateNote) return res.status(404).json({message:"Note not found !"})
         res.status(200).json({message:"Note updated successfully !"})   
    } catch (error) {
        console.log("Error in updateNote controller", error);
        res.status(500).json({message : "Internal server error "});
    }
}
export async function getNoteById(req,res){
    try { const note = await Note.findById(req.params.id);
          if(!note) return res.status(404).json({message : "Note not found!"});
        res.json(note);
    } catch (error) {
          console.log("Error in getnotebyid  controller", error);
        res.status(500).json({message : "Internal server error "});
    }
}