import Log from "../models/logModel.js";

export const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", async () => {
    try {
      await Log.create({
        endpoint: req.originalUrl,
        method: req.method,
        requestBody: req.body,
        status: res.statusCode,
        responseTime: Date.now() - start
      });
    } catch (err) {
      console.error("Logging failed:", err.message);
    }
  });

  next();
};