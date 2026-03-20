import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  endpoint: String,
  method: String,
  requestBody: Object,
  status: Number,
  responseTime: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Log", logSchema);
