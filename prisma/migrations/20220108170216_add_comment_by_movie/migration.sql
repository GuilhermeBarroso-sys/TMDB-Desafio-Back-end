/*
  Warnings:

  - Added the required column `movie_id` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` ADD COLUMN `movie_id` INTEGER NOT NULL;
