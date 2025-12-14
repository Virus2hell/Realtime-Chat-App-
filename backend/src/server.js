import express from "express"
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001

app.use("/api/auth", authRoutes);

app.listen(3001, () => console.log("Server running on port " + PORT))
