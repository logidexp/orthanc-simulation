import { MESSAGES } from "consts";
import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction } from "express";
import { Logger } from "utils";
import { dicomSyncRouter } from "routes";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/api/health", (_req, res) => res.send("OK"))
  .use("/api/dicom-sync", dicomSyncRouter)

const dbConnect = (next: NextFunction) => {
  try {
    Logger.info(MESSAGES.MSG_DB_CONNECT_SUCCESS);
    next();
  } catch (err) {
    Logger.error(MESSAGES.MSG_DB_CONNECT_FAILED);
    Logger.info(err);
  }
};

const PORT = process.env.SERBER_PORT || 4000;

dbConnect(() => {
  app.listen(PORT, () => {
    Logger.log(MESSAGES.MSG_SERVER_STARTED);
  });
});

export default app;
