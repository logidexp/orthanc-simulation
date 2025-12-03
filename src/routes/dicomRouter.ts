import { Router } from "express";
import { dicomSyncController } from "controllers";

const router = Router();

router.post("/", dicomSyncController);

export default router;

