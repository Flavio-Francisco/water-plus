"use client";
import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import {  fackreport, returnMonth } from "@/utils/models/Data";
import { ReportModel } from "../../utils/models/report";
import { styles } from "./styles";
import { CredentialsChemistdb } from "../modals/modalChemist/editForm";
import { CredentialDoctordb } from "../modals/modalDoctor/newForm";
import { CredentialOperator } from "../modals/modalOperator/newForm";
import { DesinfectionModel } from "@/utils/models/desifection";
import { formatDate } from "@/utils/functions/FormateDate";

interface Iprops {
  Chemist: CredentialsChemistdb | null;
  doctor: CredentialDoctordb | null;
  operator: CredentialOperator[] | null;
  data?: DesinfectionModel | undefined;
}

const Pdf = ({ Chemist, doctor, operator, data }: Iprops) => {
  const [report, setReport] = useState<ReportModel>();

  const date = new Date();

  const referenceMonth = returnMonth(date);
  useEffect(() => {
    setReport(fackreport);
  }, [Chemist]);

  return (
    <Document
      pageLayout="singlePage"
      title={`RELATÓRIO MENSAL ${referenceMonth}`}
    >
      <Page size="A4" style={styles.body}>
        <Image
          src="https://i1.sndcdn.com/artworks-000065614465-rlhmbv-t500x500.jpg"
          style={styles.image}
        />
        <View style={styles.header}>
          <Text style={styles.date}> Caruaru, {date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.h1}>
          <Text style={styles.title}>
            RELATÓRIO MENSAL - MÊS DE REFERÊNCIA: {referenceMonth}
          </Text>
          <View style={styles.line} />
        </View>
        <View>
          <Text style={styles.p}>
            Em atendimento a solicitação segue para conhecimento procedimentos
            executados para execução de tratamento de hemodiálise no HOSPITAL
            UNIMED CARUARU (CLINICA DE HEMODIALISE) , localizada na cidade de
            Caruaru- Pe.
          </Text>
        </View>
        <Text style={styles.p}>
          Foi executada as atividades descritas no planejamento e processos
          internos com suas devidas anotações no tocante ao controle e
          monitoramento para o tratamento de água, proporcionando uma visão
          sistemática de todo o funcionamento dos equipamentos para o segmento
          água.
        </Text>

        <View>
          <View style={styles.h1}>
            <Text style={styles.subtitle}>Para osmose passo 1</Text>
          </View>
          <Text style={styles.p}>
            Percentual de rejeito foi em média {report?.firstPass.rejectionLTS}
            %L/min, com índice de rejeição {report?.firstPass.rejectionSaline}%,
            com redução de dureza total em média de{" "}
            {report?.firstPass.hardnessReduction}% e de cloro livre de{" "}
            {report?.firstPass.chlorineRejection}%.
          </Text>
          <View style={styles.h1}>
            <Text style={styles.subtitle}>Para osmose passo 2:</Text>
          </View>
          <Text style={styles.p}>
            Percentual de rejeito foi em média meio{" "}
            {report?.secondPass.rejectionLTS}L/min, com índice de rejeição{" "}
            {report?.secondPass.rejectionSaline}% (média), com redução de dureza
            total em média de {report?.secondPass.hardnessReduction}% e de cloro
            livre de {report?.secondPass.chlorineRejection}%.
          </Text>
        </View>

        <View>
          <View style={styles.h1}>
            <Text style={styles.subtitle}>ATIVIDADES RELACIONADAS</Text>
          </View>
          <View>
            <Text style={styles.p1}>
              – Vistoria Técnica, executada DE SEGUNDA A SEXTA FEIRA ;
            </Text>
            <Text style={styles.p1}>
              –Preparação e EXECUÇÃO do sistema de tratamento de água para a
              desinfecção e descontaminação geral DIA{" "}
              {formatDate(new Date(data?.data1 || ""))}.
            </Text>
            <Text style={styles.p1}>
              – Acompanhamento coleta microbiológica e endotoxina- LABORATÓRIO
              EXTERNO (AQUALYSE).
            </Text>
            <View style={styles.space} />
            <View style={styles.h1}>
              <Text style={styles.title}>
                PROCEDIMENTOS QUÍMICOS/BIOTECNOLÓGICO
              </Text>
              <View style={styles.line1} />
            </View>
            <View style={styles.h1}>
              <Text style={styles.subtitle}>OSMOSE</Text>
            </View>
            <Text style={styles.p}>
              TRATAMENTO DE ÁGUA: Executado a desinfeção no tanque e looping,
              conforme técnica de controle e qualidade e água- DIA{" "}
              {formatDate(new Date(data?.data1 || ""))}
            </Text>

            <View style={styles.h1}>
              <Text style={styles.subtitle}>PROCEDIMENTOS EXECUTADOS</Text>
            </View>

            <Text style={styles.p}>
              – Adição de 30 litros de ácido peracético (SOLUÇÃO DE PURISTERIL),
              em 1000 litros de água, no tanque de capacidade de armazenamento
              de 1000L. Em seguida o comando foi ligado/acionado para executar a
              recirculação de bombas durante um tempo médio estimado de 3(TRES)
              horas. OBS: as bombas de recirculação são alternadas a cada 40
              minutos.
            </Text>
            <Text style={styles.p}>
              OBS1: Logo após a recirculação o líquido do primeiro tanque é
              DESPREZADO, com destino esgoto sanitário;
            </Text>
            <Text style={styles.p}>
              OBS2: Demais tanques são DESPREZADOS pelas máquinas hemodiálises
              pelo RINSE indeterminado. Desta forma, é procedido o enxague com
              5000 litros de água tratada.
            </Text>
            <Text style={styles.p1}>
              – Após as observações acima foi executado testes em pontos com
              IODETO DE POTÁSSIO, para observar a detecção/presença de
              PURISTERIL (conforme planilha em anexo TESTE NEGATIVO EM TODOS OS
              PONTOS).
            </Text>
            <Text style={styles.p1}>
              – A desinfecção do sistema foi iniciada às 08h, com término às
              11h.
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.h1}>
            <Text style={styles.subtitle}>
              ANÁLISE MICROBIOLÓGICA- CONTRA PROVAS
            </Text>
          </View>
          <View>
            <Text style={styles.p1}>
              - Foram enviadas para o laboratório AQUALYSE, com sede
              LABORATORIAL na cidade de CARUARU, amostras para execução de
              ensaio microbiológico (coliforme total e bactérias heterotróficas
              e ENDOTOXINAS).
            </Text>
            <Text style={styles.p1}>OBS: {report?.comments}</Text>
          </View>

          <View style={styles.space}></View>
          <View style={styles.signature}>
            <View style={styles.lineSignature} />

            <Text style={styles.pSignature}>{doctor?.name}</Text>
            <Text style={styles.pSignature}>CRM: {doctor?.CRM}</Text>
            <Text style={styles.pSignature}> Médico/ Responsável Técnico</Text>
          </View>
          <View style={styles.signature}>
            <View style={styles.lineSignature} />
            <Text style={styles.pSignature}>{Chemist?.name}</Text>
            <Text style={styles.pSignature}>CRQ: {Chemist?.CRM}</Text>
            <Text style={styles.pSignature}>{Chemist?.graduation}</Text>
            <Text style={styles.pSignature}>{Chemist?.postGraduation2}</Text>
            <Text style={styles.pSignature}> Químico/ Responsável Técnico</Text>
          </View>

          <View style={styles.signature}>
            <View style={styles.lineSignature} />

            <Text style={styles.pSignature}>{operator?.[0]?.name}</Text>
            <Text style={styles.pSignature}>
              Matrícula: {operator?.[0]?.registration}
            </Text>
            <Text style={styles.pSignature}> Técnico Operacional</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default Pdf;
