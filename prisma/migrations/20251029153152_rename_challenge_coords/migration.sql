/*
  Warnings:

  - You are about to drop the column `bottom` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `left` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `right` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `top` on the `Challenge` table. All the data in the column will be lost.
  - Added the required column `waldo_bottom` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waldo_left` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waldo_right` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waldo_top` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Challenge" DROP COLUMN "bottom",
DROP COLUMN "left",
DROP COLUMN "right",
DROP COLUMN "top",
ADD COLUMN     "waldo_bottom" INTEGER NOT NULL,
ADD COLUMN     "waldo_left" INTEGER NOT NULL,
ADD COLUMN     "waldo_right" INTEGER NOT NULL,
ADD COLUMN     "waldo_top" INTEGER NOT NULL;
