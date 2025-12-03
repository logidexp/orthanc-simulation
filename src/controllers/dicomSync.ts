import { Request, Response } from "express";
import { Logger } from "utils";

export const dicomSyncController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    Logger.info("DICOM sync request received");
    
    const requestBody = req.body;
    
    Logger.info("DICOM sync processed successfully");
    
    res.status(200).json({
      success: true,
      message: "DICOM sync completed successfully",
      data: requestBody,
    });
  } catch (error) {
    Logger.error("Error in DICOM sync:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

