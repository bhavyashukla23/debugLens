import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import logRoutes from "./routes/logRoutes.js";
import { requestLogger } from "./middleware/requestLogger.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 attach logger
app.use(requestLogger);

// test route
app.get("/test", (req, res) => {
  res.json({ message: "API working" });
});

// routes
app.use("/logs", logRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));