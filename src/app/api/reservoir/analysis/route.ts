
import { ReservoirAnalysisResults } from "@/components/analysis/resevoirForm";
import prisma from "../../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.reservoir_analysis.findMany({
            where: {
                system_id:Number(id)
            }
        })

        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json({
            message: "erro ao registrar"
        },
        {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const analysis:ReservoirAnalysisResults = await req.json();
    try {
        const data = await prisma.reservoir_analysis.create({
        
            data: {
                
                bicarbonateAlkalinity: analysis.bicarbonateAlkalinity,
                aluminum: analysis.aluminum,
                ammonia: analysis.ammonia,
                apparentColor: analysis.apparentColor,
                calcium: analysis.calcium,
                carbonateAlkalinity: analysis.carbonateAlkalinity,
                carbonateHardness: analysis.carbonateHardness,
                chlorides: analysis.chlorides,
                dissolvedOxygen: analysis.dissolvedOxygen,
                electricalConductivity: analysis.electricalConductivity,
                endotoxins: analysis.endotoxins,
                freeResidualChlorine: analysis.freeResidualChlorine,
                heterotrophicBacteriaCount: analysis.heterotrophicBacteriaCount,
                hydrogenSulfide: analysis.hydrogenSulfide,
                hydroxideAlkalinity: analysis.hydroxideAlkalinity,
                magnesium: analysis.magnesium,
                manganese: analysis.manganese,
                nitrate: analysis.nitrate,
                nitrite: analysis.nitrite,
                nonCarbonateHardness: analysis.nonCarbonateHardness,
                pH: analysis.pH,
                potassium: analysis.potassium,
                sampleMatrixAndOrigin: analysis.sampleName,
                samplingDate: analysis.date,
                sodium: analysis.sodium,
                sulfate: analysis.sulfate,
                surfactants: analysis.surfactants,
                totalAlkalinity: analysis.totalAlkalinity,
                totalColiforms: analysis.totalColiforms,
                totalDissolvedSolids: analysis.totalDissolvedSolids,
                totalHardness: analysis.totalHardness,
                totalIron:analysis.totalIron,
                
                system_id: Number(id)
                
            
          }

        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "deu errado"
        },
        {
            status: 500
        });
    }
}