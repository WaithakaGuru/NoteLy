-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar_image_url" DROP NOT NULL,
ALTER COLUMN "avatar_image_url" SET DEFAULT '';
