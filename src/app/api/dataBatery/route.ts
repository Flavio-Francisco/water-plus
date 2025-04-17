import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  title: string | undefined;
  day: number[] | undefined;
  data: number[] | undefined;
}

interface Iprops {
  name: string;
}

const fieldTranslations: { [key: string]: string } = {
  SoftenerInputPressure: "abrandador",
  MultimediaFilterInputPressure: "zeolita",
  CarbonOutputPressure: "carvão",
};

export async function POST(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  const data: Iprops = await req.json();

  // Definindo a data limite para os últimos 10 dias
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 10);

  try {
    if (data.name) {
      const point = await prisma.parameters.findMany({
        where: {
          system_id: Number(id),
          // date: {
            
          //   gte: thirtyDaysAgo, // Filtra apenas os registros dos últimos 30 dias
          // },
        },
        select: {
          SoftenerInputPressure: data.name === "abrandador" ? true : false,
          MultimediaFilterInputPressure: data.name === "zeolita" ? true : false,
          CarbonOutputPressure: data.name === "carvão" ? true : false,
          date: true, // Adicionando a data no resultado
        },
        orderBy: {
          date: "asc", // Ordenando os resultados por data
        },
       take:10
      });


      // Processa os dados para retornar no formato desejado
      const result: Props[] = Object.keys(fieldTranslations)
        .filter((key) => point[0][key as keyof typeof point[0]] !== undefined) // Filtra campos válidos
        .map((key) => ({
          title: fieldTranslations[key],
          day: point.map((p) => new Date(p.date || 0).getUTCDate()), // Convertendo a data para timestamp
          data: point.map((p) => p[key as keyof typeof point[0]] as number), // Valores dos campos
         
        }));


      return NextResponse.json(result[0]);
    } else {
      return NextResponse.json({ message: "Nenhum dado encontrado" });
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Erro ao buscar dados",
      },
      {
        status: 500,
      }
    );
  }
}
