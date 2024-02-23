import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { returnMinthly } from "@/utils/models/Data";
import { styles } from "./styles";

const ReservoirClearning = () => {
  const date = new Date();
  //const minthly = returnMinthly(date);
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.date}> Caruaru, {date.toLocaleDateString()}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default ReservoirClearning;
