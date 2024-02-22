import React from "react";

export default function ReportApevisa() {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>
          RELATÓRIO MENSAL - MÊS DE REFERÊNCIA: JANEIRO
        </Text>
        <Text style={styles.subtitle}>
          Local: HOSPITAL UNIMED CARUARU (CLÍNICA DE HEMODIÁLISE)
        </Text>
        <Text style={styles.subtitle}>Cidade: Caruaru, PE</Text>
        <Text style={styles.subtitle}>Data: 30 de janeiro de 2024</Text>

        <View>
          <Text style={styles.title}>ATIVIDADES EXECUTADAS:</Text>
          <Text style={styles.subtitle}>Tratamento de Água:</Text>
          <View>
            <Text style={styles.text}>Osmose Passo 1:</Text>
            <Text style={styles.text}>
              Percentual de rejeição médio: 25%L/min
            </Text>
            <Text style={styles.text}>Índice de rejeição: 98%</Text>
            <Text style={styles.text}>Redução média de dureza total: 99%</Text>
            <Text style={styles.text}>Redução de cloro livre: 100%</Text>
          </View>
          <View>
            <Text style={styles.text}>Osmose Passo 2:</Text>
            <Text style={styles.text}>
              Percentual de rejeição médio: 0.5 L/min
            </Text>
            <Text style={styles.text}>Índice de rejeição: 70% (média)</Text>
            <Text style={styles.text}>Redução média de dureza total: 99%</Text>
            <Text style={styles.text}>Redução de cloro livre: 100%</Text>
          </View>
        </View>

        <View>
          <Text style={styles.subtitle}>
            Procedimentos Químicos/Biotecnológicos:
          </Text>
          <View>
            <Text style={styles.text}>Osmose:</Text>
            <Text style={styles.text}>
              Desinfecção realizada no tanque e looping em 24/01/24.
            </Text>
            <Text style={styles.text}>
              Adição de 30 litros de ácido peracético (Solução de Puristeril) em
              1000 litros de água no tanque.
            </Text>
            <Text style={styles.text}>
              Recirculação de bombas por aproximadamente 3 horas.
            </Text>
            <Text style={styles.text}>
              Desprezo do líquido do primeiro tanque para esgoto sanitário.
            </Text>
            <Text style={styles.text}>
              Enxágue dos demais tanques com 5000 litros de água tratada.
            </Text>
            <Text style={styles.text}>
              Teste de detecção de Puristeril com Iodeto de Potássio: todos os
              pontos testados negativos.
            </Text>
            <Text style={styles.text}>
              Início da desinfecção às 08h, com término às 11h.
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.subtitle}>
            Análise Microbiológica - Contra Provas:
          </Text>
          <View>
            <Text style={styles.text}>
              Amostras enviadas para o laboratório AQUALYSE, Caruaru, para
              ensaio microbiológico (coliforme total, bactérias heterotróficas e
              endotoxinas).
            </Text>
            <Text style={styles.text}>
              Parâmetros físico-químicos conforme RDC vigente.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
