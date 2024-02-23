"use client";
import React, { useEffect, useState } from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { fakeReservoirCleaning, fackCredentials } from "@/utils/models/Data";
import { ReservoirCleaning, Credentials } from "@/utils/models/report";
import { styles } from "./styles";

const ReservoirClearning = () => {
  const date = new Date();
  const [reservoir, setReservoir] = useState<ReservoirCleaning>();
  const [credentials, setCredentials] = useState<Credentials>();
  useEffect(() => {
    setReservoir(fakeReservoirCleaning);
    setCredentials(fackCredentials);
  }, [fakeReservoirCleaning]);
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.date}> Caruaru, {date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.h1}>
          <Text style={styles.title}>
            LIMPEZA E DESINFECÇÃO DE RESERVATÓRIO HEMODIALISE TERREO
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.space} />
        <Text style={styles.p}>
          Executado serviço de limpeza de reservatórios de água potável conforme
          preconiza a RESOLUÇÃO DA DIRETORIA COLEGIADA - RDC N° 11, DE 13 DE
          MARÇO DE 2014, conforme Art. 56. Os procedimentos de manutenção
          previstos no Quadro III do Anexo desta Resolução devem ser realizados
          e registrados na frequência indicada e sempre que for verificada a não
          conformidade com os padrões estabelecidos para a água para hemodiálise
          e definido no anexo III, COMO também PORTARIA Nº 2.914, DE 12 DE
          DEZEMBRO DE 2019 QUE Dispõe sobre os procedimentos de controle e de
          vigilância da qualidade da água para consumo humano e seu padrão de
          potabilidade.
        </Text>
        <View style={styles.space} />
        <Text style={styles.p}>
          ULTIMA LIMPEZA E DESINFECÇÃO EXECUTADA EM: {reservoir?.lastCleaning}
        </Text>
        <Text style={styles.p}>
          LIMPEZA PREVISTA PARA : {reservoir?.nextCleaning}
        </Text>
        <View style={styles.space} />
        <View style={styles.signature}>
          <View style={styles.lineSignature} />
          <Text style={styles.pSignature}>
            {credentials?.Chemist.graduation}
          </Text>
          <Text style={styles.pSignature}>CRQ: {credentials?.Chemist.CRQ}</Text>
          <Text style={styles.pSignature}>
            {credentials?.Chemist.postGraduation}
          </Text>
          <Text style={styles.pSignature}>
            {credentials?.Chemist.postGraduation2}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReservoirClearning;
