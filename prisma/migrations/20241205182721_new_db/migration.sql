-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "level" REAL,
    "system_id" INTEGER,
    "hourly" TEXT,
    "pointName" TEXT,
    "LowLevel" BOOLEAN DEFAULT false,
    "CriticalLevel" BOOLEAN DEFAULT false,
    "Supply" BOOLEAN DEFAULT true,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservoir_cleaning" (
    "id" SERIAL NOT NULL,
    "lastCleaning" TEXT NOT NULL,
    "system_id" INTEGER,

    CONSTRAINT "Reservoir_cleaning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acid" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "machine" TEXT NOT NULL,
    "system_id" INTEGER,

    CONSTRAINT "acid_pkey" PRIMARY KEY ("machine")
);

-- CreateTable
CREATE TABLE "apevisa" (
    "id" SERIAL NOT NULL,
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
    "freeChlorine" TEXT,
    "pH" TEXT,
    "potentiometry" TEXT,
    "system_id" INTEGER,

    CONSTRAINT "apevisa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chemical" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "CRM" TEXT,
    "graduation" TEXT,
    "postGraduation" TEXT,
    "postGraduation2" TEXT,
    "system_id" INTEGER,

    CONSTRAINT "chemist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "control" (
    "id" SERIAL NOT NULL,
    "or1" BOOLEAN,
    "or2" BOOLEAN,
    "start" BOOLEAN,
    "start1" BOOLEAN,
    "start2" BOOLEAN,
    "conductivityOr1" BOOLEAN,
    "conductivityOr2" BOOLEAN,
    "loopingPump1" BOOLEAN,
    "loopingPump2" BOOLEAN,
    "criticalLevel" BOOLEAN,
    "lowPressureOr1" BOOLEAN,
    "lowPressureOr2" BOOLEAN,
    "pumpOr1" BOOLEAN,
    "pumpOr2" BOOLEAN,
    "off" BOOLEAN,
    "state" BOOLEAN,
    "status" BOOLEAN,
    "system" BOOLEAN,
    "automatic" BOOLEAN,
    "id_system" INTEGER,

    CONSTRAINT "control_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "desifection" (
    "id" SERIAL NOT NULL,
    "step1" TEXT NOT NULL,
    "step2" TEXT,
    "data1" TEXT,
    "data2" TEXT,
    "data3" TEXT,
    "product" TEXT,
    "quantity" TEXT,
    "loop" TEXT,
    "system_id" INTEGER NOT NULL,

    CONSTRAINT "desifection_pkey" PRIMARY KEY ("id","system_id")
);

-- CreateTable
CREATE TABLE "diasefe" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "machine" TEXT NOT NULL,
    "system_id" INTEGER,

    CONSTRAINT "diasefe_pkey" PRIMARY KEY ("machine")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "CRM" TEXT,
    "graduation" TEXT,
    "postGraduation" TEXT,
    "postGraduation2" TEXT,
    "system_id" INTEGER,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "date" TEXT,
    "description" TEXT,
    "editable" BOOLEAN,
    "systen_id" INTEGER,
    "status" TEXT,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "microbiologigo_assays" (
    "id" SERIAL NOT NULL,
    "samplingDate" TEXT NOT NULL,
    "sampleMatrixAndOrigin" TEXT,
    "eColiPresence" TEXT,
    "totalColiformsPresence" TEXT,
    "heterotrophicBacteriaCount" TEXT,
    "system_id" INTEGER,
    "endotoxins" TEXT,

    CONSTRAINT "microbiologigo_assays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT,
    "system_id" INTEGER,

    CONSTRAINT "operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parameters" (
    "id" SERIAL NOT NULL,
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
    "system_id" INTEGER,
    "date" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservoir_analysis" (
    "id" SERIAL NOT NULL,
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
    "system_id" INTEGER,

    CONSTRAINT "reservoir_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservoir_cleaning_report" (
    "id" SERIAL NOT NULL,
    "flushing" TEXT NOT NULL,
    "laboratory" TEXT,
    "loopDisinfection" TEXT,
    "initialTime" TEXT,
    "finalTime" TEXT,
    "comments" TEXT,
    "system_id" INTEGER,

    CONSTRAINT "reservoir_cleaning_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systems" (
    "id" SERIAL NOT NULL,
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
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "system_id" INTEGER,
    "adm" BOOLEAN,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "system_id" INTEGER,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "ParametersData" (
    "id" SERIAL NOT NULL,
    "inletConductivityOr1" DOUBLE PRECISION,
    "inletConductivityOr2" DOUBLE PRECISION,
    "outletConductivityOr1" DOUBLE PRECISION,
    "outletConductivityOr2" DOUBLE PRECISION,
    "inletPressureOr1" DOUBLE PRECISION,
    "inletPressureOr2" DOUBLE PRECISION,
    "outletPressureOr1" DOUBLE PRECISION,
    "outletPressureOr2" DOUBLE PRECISION,
    "system_id" INTEGER,

    CONSTRAINT "ParametersData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whatsApp" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "number" TEXT,
    "lowLevel" BOOLEAN,
    "criticaLevel" BOOLEAN,
    "Fueling" BOOLEAN,
    "SendLowLevel" BOOLEAN,
    "SendCriticaLevel" BOOLEAN,
    "SendFueling" BOOLEAN,
    "system_id" INTEGER NOT NULL,
    "messageLowLevel" TEXT,
    "messageCriticaLevel" TEXT,
    "messageFueling" TEXT,

    CONSTRAINT "whatsApp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- AddForeignKey
ALTER TABLE "Level" ADD CONSTRAINT "Level_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservoir_cleaning" ADD CONSTRAINT "Reservoir_cleaning_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acid" ADD CONSTRAINT "acid_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apevisa" ADD CONSTRAINT "apevisa_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chemical" ADD CONSTRAINT "chemical_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "desifection" ADD CONSTRAINT "desifection_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diasefe" ADD CONSTRAINT "diasefe_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_systen_id_fkey" FOREIGN KEY ("systen_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParametersData" ADD CONSTRAINT "ParametersData_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "whatsApp" ADD CONSTRAINT "whatsApp_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
