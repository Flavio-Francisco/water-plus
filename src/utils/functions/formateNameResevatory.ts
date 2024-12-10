import { WaterAnalysis } from "../models/AnalysisResevatori";

export function getTranslatedFields(data: WaterAnalysis): Record<string, string> {
    const translations: Record<keyof WaterAnalysis, string> = {
      id: "ID",
      bicarbonateAlkalinity: "Alcalinidade Bicarbonato",
      carbonateAlkalinity: "Alcalinidade Carbonato",
      hydroxideAlkalinity: "Alcalinidade Hidróxido",
      totalAlkalinity: "Alcalinidade Total",
      aluminum: "Alumínio",
      ammonia: "Amônia",
      calcium: "Cálcio",
      chlorides: "Cloretos",
      freeResidualChlorine: "Cloro Residual Livre",
      electricalConductivity: "Condutividade Elétrica",
      apparentColor: "Cor Aparente",
      carbonateHardness: "Dureza Carbonatada",
      nonCarbonateHardness: "Dureza Não Carbonatada",
      totalHardness: "Dureza Total",
      totalIron: "Ferro Total",
      magnesium: "Magnésio",
      manganese: "Manganês",
      nitrate: "Nitrato",
      nitrite: "Nitrito",
      dissolvedOxygen: "Oxigênio Dissolvido",
      pH: "pH",
      potassium: "Potássio",
      sodium: "Sódio",
      totalDissolvedSolids: "Sólidos Totais Dissolvidos",
      sulfate: "Sulfato",
      hydrogenSulfide: "Sulfeto de Hidrogênio",
      surfactants: "Surfactantes",
      totalColiforms: "Coliformes Totais",
      heterotrophicBacteriaCount: "Contagem de Bactérias Heterotróficas",
      endotoxins: "Endotoxinas",
      samplingDate: "Data da Coleta",
      sampleMatrixAndOrigin: "Origem da Amostra",
      system_id: "ID do Sistema",
    };
  
    // Retorna um objeto com os campos originais e suas traduções
    const translatedObject: Record<string, string> = {};
    Object.keys(data).forEach((key) => {
      translatedObject[key] = translations[key as keyof WaterAnalysis];
    });
  
    return translatedObject;
  }
  