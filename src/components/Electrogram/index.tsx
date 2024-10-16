"use client";
import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
import { ParametersDB } from "@/utils/models/WaterParametersModel";
import {
  formatDay,
  formatMonth,
  organizeData,
} from "@/utils/functions/FormateDate";

interface Iprops {
  data: ParametersDB[];
  system: string | undefined;
}

const Electrogram: React.FC<Iprops> = ({ data, system }) => {
  const [datas, setDatas] = useState(organizeData(data));

  useEffect(() => {
    setDatas(organizeData(data));
  }, [data]);

  if (data.length === 0) {
    return (
      <Document>
        <Page size="A4" orientation="landscape" style={styles.body}>
          <View style={styles.table}>
            <Text>No data available</Text>
          </View>
        </Page>
      </Document>
    );
  }

  // Adiciona verificação para garantir que datas[0] existe
  if (!datas || datas.length === 0 || !datas[0]) {
    return (
      <Document>
        <Page size="A4" orientation="landscape" style={styles.body}>
          <View style={styles.table}>
            <Text>No valid data available</Text>
          </View>
        </Page>
      </Document>
    );
  }

  // Extract dates and keys
  const keys = Object.keys(datas[0]).filter(
    (key) => key !== "date" && key !== "id" && key !== "system_id"
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCellContent = (value: any): string => {
    if (value === null || value === undefined) return "";
    if (typeof value === "boolean") return value ? "Sim" : "Não";
    if (value instanceof Date) return value.toLocaleDateString();
    return value.toString();
  };

  return (
    <Document
      title={`Parâmetros ETA ${formatMonth(new Date(data[0].date || ""))}`}
    >
      <Page size="A4" orientation="landscape" style={styles.body}>
        <View style={styles.header}>
          <Image
            src="https://i1.sndcdn.com/artworks-000065614465-rlhmbv-t500x500.jpg"
            style={styles.image}
          />
          <Text style={styles.title}>Parâmetros ETA {system}</Text>
          <Text style={styles.date}>
            {formatMonth(new Date(data[0].date || ""))}
          </Text>
        </View>
        <View style={styles.table}>
          {/* Header Row */}
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeaderParams}>
              <Text>Parâmetros</Text>
            </View>
            {datas.map((date) => (
              <View key={date.id} style={styles.tableCellHeader}>
                <Text>{formatDay(new Date(date.date || ""))}</Text>
              </View>
            ))}
          </View>

          {/* Data Rows */}
          {keys.map((key) => (
            <View key={key} style={styles.tableRow}>
              <View style={styles.tableCellParams}>
                <Text>{translationMap[key as keyof ParametersDB]}</Text>
              </View>
              {datas.map((entry, index) => (
                <View key={index} style={styles.tableCell}>
                  <Text>
                    {renderCellContent(entry[key as keyof ParametersDB])}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Electrogram;

const translationMap: { [key in keyof ParametersDB]?: string } = {
  Color: "Cor Aparente",
  Turbidity: "Turvação",
  Taste: "Sabor",
  Odor: "Odor",
  TotalChlorine: "Cloro Total",
  FreeChlorine: "Cloro Livre",
  ph: "PH",
  SoftenerHardness: "Dureza ",
  MultimediaFilterInputPressure: "Pressão do Multimeios",
  SoftenerInputPressure: "Pressão do Abramdador",
  CarbonInputPressure: "Pressão de E. Carvão",
  CarbonOutputPressure: "Pressão de S.Carvão",
  MultimediaFilterDisplayTime: "Horário Multimeios",
  SoftenerDisplayTime: "Horário Abramdador",
  CarbonDisplayTime: "Horário  Carvão",
  SaltReservoirLevel: "Nível do Sal",
  ROInputPressure1: "Pressão de E. 1º Passo",
  MembraneInputPressure1: "Pressão de M. 1º Passo",
  RejectPressur1: "Rejeição 1º Passo",
  ROInputConductivity1: "Condutividade de E. 1º Passo",
  ROOutputConductivity1: "Condutividade de S. 1º Passo",
  SalinityRejectionRate1: "R.de Salina 1º Passo",
  PermeateFlowRate1: "Permeado  1º Passo",
  RejectFlowRate1: "Rejeito 1º Passo",
  ROInputPressure2: "Pressão de E. 2º Passo",
  MembraneInputPressure2: "Pressão de M. 2º Passo",
  RejectPressur2: "Pressão de R. 2º Passo",
  ROInputConductivity2: "Condutividade de E. 2º Passo",
  ROOutputConductivity2: "Condutividade de S. 2º Passo",
  SalinityRejectionRate2: "Rejeição 2º Passo",
  PermeateFlowRate2: "Permeado 2º Passo",
  RejectFlowRate2: "Rejeito 2º Passo",
  OutputPressure: "Pressão de Saída Looping",
  ReturnPressure: "Pressão de Retorno Looping",
  OzoneTestBefore1stShift: " Ozônio ",
  Conductivity: "Condutividade",
};
