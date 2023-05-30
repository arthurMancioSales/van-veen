-- CreateTable
CREATE TABLE "Alumni" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "approvals" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "image" INTEGER NOT NULL,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonials" (
    "id" SERIAL NOT NULL,
    "testimonial" TEXT NOT NULL,
    "image" INTEGER NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upload_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Upload_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Uploads" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Uploads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "alumni_image_foreign" FOREIGN KEY ("image") REFERENCES "Uploads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Testimonials" ADD CONSTRAINT "testimonials_image_foreign" FOREIGN KEY ("image") REFERENCES "Uploads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Uploads" ADD CONSTRAINT "uploads_type_foreign" FOREIGN KEY ("type") REFERENCES "Upload_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

