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
  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function colorClassification(name: string, data:  WaterAnalysis) {
  console.log(data);
  
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
  if (name == translations.bicarbonateAlkalinity) {
 
      return "Verde";
    
  }

  if (name == translations.aluminum) {
    const value = Number(data.aluminum);
    if (value >= 0.20) {
      return "Vermelho";
    } else if (value >= 0.17 && value <= 0.19) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }

  if (name == translations.calcium) {
    return "Verde";
  }
  if (name == translations.carbonateAlkalinity) {
  
      return "Verde";

  }
  if (name == translations.hydroxideAlkalinity) {

      return "Verde";
    }
  if (name == translations.totalAlkalinity) {
  
        return "Verde";
      
  }
  if (name == translations.ammonia) {
      const value = Number(data);
      if (value >= 1.20) {
        return "Vermelho";
      } else if (value >= 1.2 && value <= 1.19) {
        return "Amarelo";
      } else {
        return "Verde";
      }
   }
  if (name == translations.calcium) {

      return "Verde";
   
  }
  if (name == translations.chlorides) {
    const value = Number(data.chlorides);
  if (value >= 250) {
      return "Vermelho";
    } else if (value >= 180 && value <= 199) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.freeResidualChlorine) {
    const value = Number(data.freeResidualChlorine);
    if (value >= 5) {
      return "Vermelho";
    } else if (value >= 3 && value <= 4.99) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.electricalConductivity) {
    const value = Number(data.electricalConductivity);
    if (value >= 1500) {
      return "Vermelho";
    } else if (value >= 600 && value <= 1499) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.apparentColor) {
    const value = Number(data.apparentColor);
    if (value >= 15) {
      return "Vermelho";
    } else if (value >= 5 && value <= 14.99) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.carbonateHardness) {
  
      return "Verde";
    
  }         
  if (name == translations.nonCarbonateHardness) {
 
      return "Verde";
 
  } 
  if (name == translations.totalHardness) {
    const value = Number(data.totalHardness);
    if (value >= 300) {
      return "Vermelho";
    } else if (value >= 250 && value <= 299) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.totalIron) {
    const value = Number(data.totalIron);
    if (value >= 0.30) {
      return "Vermelho";
    } else if (value >= 0.25 && value <= 0.29) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.totalHardness) {
    const value = Number(data.totalHardness);
    if (value >= 300) {
      return "Vermelho";
    } else if (value >= 250 && value <= 299) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }if (name == translations.magnesium) {
 
      return "Verde";
   }
  if (name == translations.manganese) {
    const value = Number(data.manganese);
    
    if (value >= 0.9) {
 
      return "Vermelho";
    } else if (value >= 0.6 && value < 0.9) {

      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.nitrate) {
    const value = Number(data.nitrate);
    if (value >= 10) {
      return "Vermelho";
    } else if (value >= 5 && value <= 9.99) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.nitrite) {
    const value = Number(data.nitrite);
    if (value >= 1) {
      return "Vermelho";
    } else if (value >= 0.3 && value <= 0.9) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.dissolvedOxygen) {
 
  
      return "Verde";
    
  }
  if (name == translations.pH) {
    const value = Number(data.pH);
    if (value >= 9 || value <= 6 ) {
      return "Vermelho";
    } else if (value >= 6.1 && value <= 6.99 || value >=8 && value <=8.99) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.potassium) {

      return "Verde";
    
  }
  if (name == translations.sodium) {
    const value = Number(data.sodium);
    if (value >= 200) {
      return "Vermelho";
    } else if (value >= 100 && value <= 199) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.totalDissolvedSolids) {
    const value = Number(data.totalDissolvedSolids);
    if (value >= 500) {
      return "Vermelho";
    } else if (value >= 200 && value <= 499) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.sulfate) {
    const value = Number(data.sulfate);
    if (value >= 250) {
      return "Vermelho";
    } else if (value >= 150 && value <= 199) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.hydrogenSulfide) {
    const value = Number(data.hydrogenSulfide);
    if (value >= 0.05) {
      return "Vermelho";
    } else if (value >= 0.03 && value <= 0.04) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.surfactants) {
 
      return "Verde";
  
  }
  if (name == translations.totalColiforms) {
    const value = Number(data.totalColiforms);
    if (value >= 100) {
      return "Vermelho";
    } else if (value >= 5 && value <= 99) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.heterotrophicBacteriaCount) {
    const value = Number(data.heterotrophicBacteriaCount);
    if (value >= 100) {
      return "Vermelho";
    } else if (value >= 60 && value <= 99) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
  if (name == translations.endotoxins) {
    const value = Number(data.endotoxins);
    if (value >= 0.25) {
      return "Vermelho";
    } else if (value >= 0.5 && value <= 0.24) {
      return "Amarelo";
    } else {
      return "Verde";
    }
  }
} 

