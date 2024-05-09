-- CreateTable
CREATE TABLE "Reservoir_cleaning" (
    "id" BIGSERIAL NOT NULL,
    "lastCleaning" TEXT NOT NULL,
    "nextCleaning" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "Reservoir_cleaning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apevisa" (
    "id" BIGSERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "name" TEXT,
    "cianoBacteria" TEXT,
    "escherichaColi" TEXT,
    "endotoxin" TEXT,
    "heterotrophic" TEXT,
    "totalColiforms" TEXT,
    "seedingInDepth" TEXT,
    "seedingOnSurface" TEXT,
    "conductivity" TEXT,
    "freeChlorine?" TEXT,
    "pH" TEXT,
    "potentiometry" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "apevisa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chemical" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "CRM" TEXT,
    "graduation" TEXT,
    "postGraduation" TEXT,
    "postGraduation2" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "chemist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diasefe" (
    "id" BIGSERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "machine" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "diasefe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "CRM" TEXT,
    "graduation" TEXT,
    "postGraduation" TEXT,
    "postGraduation2" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "microbiologigo_assays" (
    "id" BIGSERIAL NOT NULL,
    "samplingDate" TEXT NOT NULL,
    "sampleMatrixAndOrigin" TEXT,
    "eColiPresence" TEXT,
    "totalColiformsPresence" TEXT,
    "heterotrophicBacteriaCount" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "microbiologigo_assays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operator" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parameters" (
    "id" BIGSERIAL NOT NULL,
    "Color" TEXT NOT NULL,
    "Turbidity" TEXT,
    "Taste" TEXT,
    "Odor" TEXT,
    "TotalChlorine" REAL,
    "FreeChlorine" REAL,
    "ph" REAL,
    "SoftenerHardness" REAL,
    "MultimediaFilterInputPressure" REAL,
    "SoftenerInputPressure" REAL,
    "CarbonInputPressure" REAL,
    "CarbonOutputPressure" REAL,
    "MultimediaFilterDisplayTime" TEXT,
    "SoftenerDisplayTime" TEXT,
    "CarbonDisplayTime" TEXT,
    "SaltReservoirLevel" TEXT,
    "ROInputPressure1" REAL,
    "ROInputPressure2" REAL,
    "MembraneInputPressure1" REAL,
    "MembraneInputPressure2" REAL,
    "RejectPressur1" REAL,
    "RejectPressur2" REAL,
    "ROInputConductivity1" REAL,
    "ROInputConductivity2" REAL,
    "ROOutputConductivity1" REAL,
    "ROOutputConductivity2" REAL,
    "SalinityRejectionRate1" REAL,
    "SalinityRejectionRate2" REAL,
    "PermeateFlowRate1" REAL,
    "PermeateFlowRate2" REAL,
    "RejectFlowRate1" REAL,
    "RejectFlowRate2" REAL,
    "OutputPressure" REAL,
    "ReturnPressure" REAL,
    "OzoneTestBefore1stShift" BOOLEAN,
    "Conductivity" REAL,
    "system_id" BIGINT,

    CONSTRAINT "parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservoir_analysis" (
    "id" BIGSERIAL NOT NULL,
    "bicarbonateAlkalinity" TEXT NOT NULL,
    "carbonateAlkalinity" TEXT,
    "hydroxideAlkalinity" TEXT,
    "totalAlkalinity" TEXT,
    "aluminum" TEXT,
    "ammonia" TEXT,
    "calcium" TEXT,
    "chlorides" TEXT,
    "freeResidualChlorine" TEXT,
    "electricalConductivity" TEXT,
    "apparentColor" TEXT,
    "carbonateHardness" TEXT,
    "nonCarbonateHardness" TEXT,
    "totalHardness" TEXT,
    "totalIron" TEXT,
    "magnesium" TEXT,
    "manganese" TEXT,
    "nitrate" TEXT,
    "nitrite" TEXT,
    "dissolvedOxygen" TEXT,
    "pH" TEXT,
    "potassium" TEXT,
    "sodium" TEXT,
    "totalDissolvedSolids" TEXT,
    "sulfate" TEXT,
    "hydrogenSulfide" TEXT,
    "surfactants" TEXT,
    "totalColiforms" TEXT,
    "heterotrophicBacteriaCount" TEXT,
    "endotoxins" TEXT,
    "samplingDate" TEXT,
    "sampleMatrixAndOrigin" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "reservoir_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservoir_cleaning_report" (
    "id" BIGSERIAL NOT NULL,
    "flushing" TEXT NOT NULL,
    "laboratory" TEXT,
    "loopDisinfection" TEXT,
    "initialTime" TEXT,
    "finalTime" TEXT,
    "comments" TEXT,
    "system_id" BIGINT,

    CONSTRAINT "reservoir_cleaning_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systems" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "number" INTEGER,

    CONSTRAINT "systems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "password" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservoir_cleaning" ADD CONSTRAINT "Reservoir_cleaning_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apevisa" ADD CONSTRAINT "apevisa_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chemical" ADD CONSTRAINT "chemical_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diasefe" ADD CONSTRAINT "diasefe_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "microbiologigo_assays" ADD CONSTRAINT "microbiologigo_assays_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operator" ADD CONSTRAINT "operator_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "parameters_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservoir_analysis" ADD CONSTRAINT "reservoir_analysis_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservoir_cleaning_report" ADD CONSTRAINT "reservoir_cleaning_report_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
