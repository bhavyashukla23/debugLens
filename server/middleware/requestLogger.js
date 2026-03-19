import Log from "../models/logModel.js";

export default async function(req,res,next){
         const start = Date.now();

  const oldSend = res.send;

  res.send = function (data) {
    res.locals.responseBody = data;
    oldSend.apply(res, arguments);
  };

  res.on("finish", async () => {
    try {
      await Log.create({
        endpoint: req.originalUrl,
        method: req.method,
        requestBody: req.body,
        responseBody: res.locals.responseBody,
        status: res.statusCode,
        responseTime: Date.now() - start,
      });
    } catch (err) {
      console.error(err);
    }
  });

  next();
}