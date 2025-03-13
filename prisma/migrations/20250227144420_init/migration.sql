-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HostingRequest" (
    "id" SERIAL NOT NULL,
    "selectedPackage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "hostingRequirement" TEXT NOT NULL,
    "technicalSpecs" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HostingRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DevelopmentServices" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "projectRequirements" TEXT NOT NULL,
    "budgetRange" TEXT NOT NULL,
    "timelineExpectations" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DevelopmentServices_pkey" PRIMARY KEY ("id")
);
