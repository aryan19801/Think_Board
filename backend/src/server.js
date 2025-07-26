import express from "express";
import notesRotes from "./routes/noteRouter.js";
import connectDb from "./lib/db.js";
import path from 'path';
import { fileURLToPath } from "url";
import rateLimiter from "./middleware/rateLimiter.js";
const app = express()
const PORT = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(rateLimiter)

app.use("/api/notes", notesRotes);

if(process.env.NODE_ENV==="production"){
   const pathToFrontendDist = path.join(__dirname, '..', '..', 'frontend', 'dist');

    app.use(express.static(pathToFrontendDist));

    app.get("*", (req, res) => {
        res.sendFile(path.join(pathToFrontendDist, "index.html"));
    });
}

 connectDb().then(
    ()=>{
    app.listen(PORT, ()=>{
   
    console.log(`Server is running at : ${PORT} `);
})
    }
 )
