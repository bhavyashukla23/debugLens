import express from "express"
import Log from "../models/logModel.js"
import axios from "axios"

const router = express.Router()

// Get all logs
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 })
    res.json(logs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Replay request by log ID
router.post("/replay/:id", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id)

    if (!log) {
      return res.status(404).json({ message: "Log not found" })
    }

    const response = await axios({
      method: log.method,
      url: `http://localhost:5000${log.endpoint}`,
      data: log.requestBody
    })

    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router;