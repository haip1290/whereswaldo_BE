-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "top" INTEGER NOT NULL,
    "left" INTEGER NOT NULL,
    "bottom" INTEGER NOT NULL,
    "right" INTEGER NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Challenge_url_key" ON "Challenge"("url");
