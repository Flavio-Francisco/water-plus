import {  WaterTreatmentParameters } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";



const fieldTranslations: { [key: string]: string } = {
    Color: "Cor",
    Turbidity: "Turbidez",
    Taste: "Sabor",
    Odor: "Odor",
    TotalChlorine: "Cloro Total",
    FreeChlorine: "Cloro Livre",
    ph: "pH",
    SoftenerHardness: "Dureza do Abrandador",
    MultimediaFilterInputPressure: "Pressão do Multimeios",
    SoftenerInputPressure: "Pressão do Abrandador",
    CarbonInputPressure: "Pressão do Carvão",
    CarbonOutputPressure: "Pressão de S. do Carvão",
    MultimediaFilterDisplayTime: "Hora do Multimeios",
    SoftenerDisplayTime: "Hora do Abrandador",
    CarbonDisplayTime: "Hora do Carvão",
    SaltReservoirLevel: "Nível do  Sal",
    ROInputPressure1: "Pressão de E. 1º Passo",
    ROInputPressure2: "Pressão de E. 2º Passo",
    MembraneInputPressure1: "P. Membrana 1º Passo",
    MembraneInputPressure2: "P.Membrana 2º Passo",
    RejectPressur1: "P. de Rejeito 1º Passo",
    RejectPressur2: "P. de Rejeito 2º Passo",
    ROInputConductivity1: "Condutividade de E. 1º Passo",
    ROInputConductivity2: "Condutividade de E. 2º Passo",
    ROOutputConductivity1: "Condutividade de S. 1º Passo",
    ROOutputConductivity2: "Condutividade de S. 2º Passo",
    SalinityRejectionRate1: "R. Salinidade 1º Passo",
    SalinityRejectionRate2: "R. 2º Passo",
    PermeateFlowRate1: "Permeado 1º Passo",
    PermeateFlowRate2: "Permeado 2º Passo",
    RejectFlowRate1: "Rejeito 1º Passo",
    RejectFlowRate2: "Rejeição 2º Passo",
    OutputPressure: "Pressão de Saída",
    ReturnPressure: "Pressão de Retorno",
    OzoneTestBefore1stShift: "Teste de Ozônio ",
    Conductivity: "Condutividade",
   
};

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    try {
        const data = await prisma.parameters.findMany({
            where: {
                system_id: Number(id),
            },
        });

        if (data.length > 0) {
            // Obtem os nomes dos campos do primeiro objeto
            const fieldNames = Object.keys(data[0]);

            // Remove os campos "id" e "system_id"
            const filteredFields = fieldNames.filter(field => field !== "id" && field !== "system_id" && field !== "date" && field !== "SaltReservoirLevel");

            // Traduz os nomes dos campos
            const translatedFields = filteredFields.map((field) => fieldTranslations[field] || field);

            return NextResponse.json({ title: translatedFields });
        } else {
            return NextResponse.json({ message: "Nenhum dado encontrado" });
        }
    } catch (error) {
        return NextResponse.json(
            {
                message: "Erro ao salvar dados",
            },
            {
                status: 500,
            }
        );
    }
}


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const parameters: WaterTreatmentParameters = await req.json()

    console.log(parameters);
    
    try {
        const data = await prisma.parameters.create({
            data: {
                Color: parameters.WATER_FEED.Color || '',
                CarbonDisplayTime: parameters.PRE_TREATMENT.CarbonDisplayTime,
                CarbonInputPressure: parameters.PRE_TREATMENT.CarbonInputPressure,
                CarbonOutputPressure: parameters.PRE_TREATMENT.CarbonOutputPressure,
                Conductivity: parameters.LOOP.Conductivity,
                FreeChlorine: parameters.WATER_FEED.FreeChlorine,
                MembraneInputPressure1: parameters.REVERSE_OSMOSIS_1ST_STEP.MembraneInputPressure,
                MembraneInputPressure2: parameters.REVERSE_OSMOSIS_2ND_STEP.MembraneInputPressure,
                MultimediaFilterDisplayTime: parameters.PRE_TREATMENT.MultimediaFilterDisplayTime,
                MultimediaFilterInputPressure: parameters.PRE_TREATMENT.MultimediaFilterInputPressure,
                Odor: parameters.WATER_FEED.Odor,
                OutputPressure: parameters.LOOP.OutputPressure,
                OzoneTestBefore1stShift: parameters.LOOP.OzoneTestBefore1stShift,
                PermeateFlowRate1: parameters.REVERSE_OSMOSIS_1ST_STEP.PermeateFlowRate,
                PermeateFlowRate2: parameters.REVERSE_OSMOSIS_2ND_STEP.PermeateFlowRate,
                ph: parameters.WATER_FEED.pH,
                RejectFlowRate1: parameters.REVERSE_OSMOSIS_1ST_STEP.RejectFlowRate,
                RejectFlowRate2: parameters.REVERSE_OSMOSIS_2ND_STEP.RejectFlowRate,
                RejectPressur1: parameters.REVERSE_OSMOSIS_1ST_STEP.RejectPressure,
                RejectPressur2: parameters.REVERSE_OSMOSIS_2ND_STEP.RejectPressure,
                ReturnPressure: parameters.LOOP.ReturnPressure,
                ROInputConductivity1: parameters.REVERSE_OSMOSIS_1ST_STEP.ROInputConductivity,
                ROInputConductivity2: parameters.REVERSE_OSMOSIS_2ND_STEP.ROInputConductivity,
                ROInputPressure1: parameters.REVERSE_OSMOSIS_1ST_STEP.ROInputPressure,
                ROInputPressure2: parameters.REVERSE_OSMOSIS_2ND_STEP.ROInputPressure,
                ROOutputConductivity1: parameters.REVERSE_OSMOSIS_1ST_STEP.ROOutputConductivity,
                ROOutputConductivity2: parameters.REVERSE_OSMOSIS_2ND_STEP.ROOutputConductivity,
                SalinityRejectionRate1: parameters.REVERSE_OSMOSIS_1ST_STEP.SalinityRejectionRate,
                SalinityRejectionRate2: parameters.REVERSE_OSMOSIS_2ND_STEP.SalinityRejectionRate,
                SaltReservoirLevel: parameters.PRE_TREATMENT.SaltReservoirLevel,
                SoftenerDisplayTime: parameters.PRE_TREATMENT.SoftenerDisplayTime,
                SoftenerHardness: parameters.PRE_TREATMENT.SoftenerHardness,
                SoftenerInputPressure: parameters.PRE_TREATMENT.SoftenerInputPressure,
                Taste: parameters.WATER_FEED.Taste,
                TotalChlorine: parameters.WATER_FEED.TotalChlorine,
                Turbidity: parameters.WATER_FEED.Turbidity,
                system_id: Number(id)
            
            
            }
         
     
        });
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
     message:"Erro ao salvar dados"
        },
            {
                status:500
            }
        )
    
    
    }
}