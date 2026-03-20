import Log from "../models/logModel.js";
import axios from "axios";

export const getLogs = async (req, res) => {
  const logs = await Log.find().sort({ timestamp: -1 });
  res.json(logs);
};

export const replayRequest = async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);

    const response = await axios({
      method: log.method,
      url: process.env.BASE_URL + log.endpoint,
      data: log.requestBody
    });

    res.json({
      replayed: true,
      data: response.data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};