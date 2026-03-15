import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  endpoint: {
    type: String,
  },
  method: {
    type: String,
  },
  request: {
    type: Object,
  },
  responseBody: {
    type: Object,
  },
  status: {
    type: Number,
  },
  responseTime: {
    type: Number,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Log = mongoose.model("Log", logSchema);
export default Log;
