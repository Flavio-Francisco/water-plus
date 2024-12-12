import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { formatDatePdf } from "@/utils/functions/ordeData";
import { WaterAnalysis } from "@/utils/models/AnalysisResevatori";
import {
  colorClassification,
  getTranslatedFields,
} from "@/utils/functions/formateNameResevatory";

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    padding: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 10,
  },
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },
  tableCellGreen: {
    color: "green",
    backgroundColor: "#e5f9e7",
  },
  tableCellYellow: {
    color: "#89a100",
    backgroundColor: "#f0f894",
  },
  tableCellRed: {
    color: "red",
    backgroundColor: "#f9e5ea",
  },
});

interface IProps {
  selectedAnalys: WaterAnalysis[];
  poitName: string;
}

const PdfTable = ({ selectedAnalys, poitName }: IProps) => {
  const selectedNames = getTranslatedFields(selectedAnalys[0]);

  return (
    <Document title={poitName}>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 1,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
            Dados das Análises do {poitName}
          </Text>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={{ ...styles.tableCell, width: "25%" }}>Parâmetro</Text>
            {selectedAnalys.map((item, index) => (
              <Text
                key={`header-${index}`}
                style={{
                  padding: 2,
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  fontSize: 10,
                  width: "6.25%",
                  textAlign: "center",
                }}
              >
                {formatDatePdf(item.samplingDate) || `Data ${index + 1}`}
              </Text>
            ))}
          </View>

          {/* Corpo da Tabela */}
          {Object.entries(selectedNames)
            .filter(
              ([fieldKey]) =>
                fieldKey !== "id" &&
                fieldKey !== "system_id" &&
                fieldKey !== "samplingDate" &&
                fieldKey !== "sampleMatrixAndOrigin"
            )
            .map(([fieldKey, fieldName]) => (
              <View key={fieldKey} style={styles.tableRow}>
                <Text
                  style={{
                    ...styles.tableCell,
                    width: "25%",
                  }}
                >
                  {fieldName}
                </Text>
                {selectedAnalys.map((item, index) => {
                  const classification = colorClassification(fieldName, item);
                  let cellStyle = {};

                  // Lógica de classificação para as cores
                  if (classification === "Verde") {
                    cellStyle = styles.tableCellGreen;
                  } else if (classification === "Amarelo") {
                    cellStyle = styles.tableCellYellow;
                  } else {
                    cellStyle = styles.tableCellRed;
                  }

                  return (
                    <Text
                      key={`${fieldKey}-${index}`}
                      style={{
                        ...styles.tableCell,
                        ...cellStyle,
                        width: "6.25%",
                      }}
                    >
                      {(item as unknown as Record<string, string | number>)[
                        fieldKey
                      ] || "-"}
                    </Text>
                  );
                })}
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
};

export default PdfTable;
