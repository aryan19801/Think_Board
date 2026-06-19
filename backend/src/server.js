import express from "express";
import notesRoutes from "./routes/noteRouter.js";
import authRoutes from "./routes/authRouter.js";
import connectDb from "./lib/db.js";
import path from "path";
import { fileURLToPath } from "url";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes);

// Production Setup
if (process.env.NODE_ENV === "production") {
  const pathToFrontendDist = path.join(
    __dirname,
    "..",
    "..",
    "frontend",
    "dist"
  );

  app.use(express.static(pathToFrontendDist));

  app.get("*", (req, res) => {
    res.sendFile(path.join(pathToFrontendDist, "index.html"));
  });
}

// Start Server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});