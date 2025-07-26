import express from "express";
import notesRotes from "./routes/noteRouter.js";
import connectDb from "./lib/db.js";
import path from 'path';
const app = express()
const PORT = 8000

const __dirname=path.resolve();
app.use("/api/notes", notesRotes);

if(process.env.NODE_URI==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}

app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server is running at : {PORT} `);
})