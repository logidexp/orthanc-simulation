-- CreateTable
CREATE TABLE "Study" (
    "id" SERIAL NOT NULL,
    "studyInstanceUid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Study_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Study_studyInstanceUid_key" ON "Study"("studyInstanceUid");
