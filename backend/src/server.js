import express from "express";
import notesRotes from "./routes/noteRouter.js";
import connectDb from "./lib/db.js";
import path from 'path';
import { fileURLToPath } from "url";
const app = express()
const PORT = 8000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/notes", notesRotes);

if(process.env.NODE_ENV==="production"){
   const pathToFrontendDist = path.join(__dirname, '..', '..', 'frontend', 'dist');

    app.use(express.static(pathToFrontendDist));

    app.get("*", (req, res) => {
        res.sendFile(path.join(pathToFrontendDist, "index.html"));
    });
}

app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server is running at : {PORT} `);
})