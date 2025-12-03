import { Request, Response } from "express";
import { Logger } from "utils";
import { prisma } from "utils/prisma";

const orthancStudies = [
  "1.2.826.0.1.3680043.8.1055.1.20111103111148288.98361414.79379639",
  "1.2.826.0.1.3680043.8.1055.1.20111103111148288.94019146.71622702"
];

export const dicomSyncController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    Logger.info("DICOM sync request received");
    
    let created = 0;
    let skipped = 0;
    
    for (const studyInstanceUid of orthancStudies) {
      // Check if study already exists
      const existingStudy = await prisma.study.findUnique({
        where: { studyInstanceUid }
      });
      
      if (existingStudy) {
        skipped++;
        Logger.info(`Study ${studyInstanceUid} already exists, skipping`);
      } else {
        // Create new study
        await prisma.study.create({
          data: { studyInstanceUid }
        });
        created++;
        Logger.info(`Created study ${studyInstanceUid}`);
      }
    }
    
    Logger.info("DICOM sync processed successfully");
    
    res.status(200).json({
      created,
      skipped,
      totalOrthancStudies: orthancStudies.length
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

