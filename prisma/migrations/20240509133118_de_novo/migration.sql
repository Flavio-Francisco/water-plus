/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ADD COLUMN     "system_id" BIGINT,
ALTER COLUMN "name" SET NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id", "name");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
