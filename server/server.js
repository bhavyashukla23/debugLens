import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routesLogger from "./middleware/requestLogger.js";
import logRoutes from "./routes/logRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routesLogger);
app.use("/logs", logRoutes);

mongoose.connect("mongodb://localhost:27017/ttd");

app.listen(5000,()=>{
    console.log("Server is running on port 5000.");
});