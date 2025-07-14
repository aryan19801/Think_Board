import express from "express"
import notesRotes from "./routes/noteRouter.js"
const app = express()
const PORT = 8000

app.use("/api/notes", notesRotes)


app.listen(PORT, ()=>{
    console.log(`Server is running at : {PORT} `)
})