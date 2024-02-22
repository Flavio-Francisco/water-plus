import React from "react";

const ReportMonthlyApevisa = () => {
  return (
    <div>
      <h1>RELATÓRIO MENSAL - MÊS DE REFERÊNCIA: JANEIRO</h1>
      <h2>Local: HOSPITAL UNIMED CARUARU (CLÍNICA DE HEMODIÁLISE)</h2>
      <h2>Cidade: Caruaru, PE</h2>
      <h2>Data: 30 de janeiro de 2024</h2>

      <h3>ATIVIDADES EXECUTADAS:</h3>
      <ol>
        <li>
          <h4>Tratamento de Água:</h4>
          <ul>
            <li>Osmose Passo 1:</li>
            <ul>
              <li>Percentual de rejeição médio: 25%L/min</li>
              <li>Índice de rejeição: 98%</li>
              <li>Redução média de dureza total: 99%</li>
              <li>Redução de cloro livre: 100%</li>
            </ul>
            <li>Osmose Passo 2:</li>
            <ul>
              <li>Percentual de rejeição médio: 0.5 L/min</li>
              <li>Índice de rejeição: 70% (média)</li>
              <li>Redução média de dureza total: 99%</li>
              <li>Redução de cloro livre: 100%</li>
            </ul>
          </ul>
        </li>
        <li>
          <h4>Procedimentos Químicos/Biotecnológicos:</h4>
          <ul>
            <li>Osmose:</li>
            <ul>
              <li>Desinfecção realizada no tanque e looping em 24/01/24.</li>
              <li>
                Adição de 30 litros de ácido peracético (Solução de Puristeril)
                em 1000 litros de água no tanque.
              </li>
              <li>Recirculação de bombas por aproximadamente 3 horas.</li>
              <li>
                Desprezo do líquido do primeiro tanque para esgoto sanitário.
              </li>
              <li>
                Enxágue dos demais tanques com 5000 litros de água tratada.
              </li>
              <li>
                Teste de detecção de Puristeril com Iodeto de Potássio: todos os
                pontos testados negativos.
              </li>
              <li>Início da desinfecção às 08h, com término às 11h.</li>
            </ul>
          </ul>
        </li>
        <li>
          <h4>Análise Microbiológica - Contra Provas:</h4>
          <ul>
            <li>
              Amostras enviadas para o laboratório AQUALYSE, Caruaru, para
              ensaio microbiológico (coliforme total, bactérias heterotróficas e
              endotoxinas).
            </li>
            <li>Parâmetros físico-químicos conforme RDC vigente.</li>
          </ul>
        </li>
      </ol>

      <h3>ASSINATURAS:</h3>
      <ul>
        <li>Médico/Responsável Técnico: [Assinatura]</li>
        <li>Diretor Técnico: [Assinatura]</li>
        <li>Químico - UEPB: [Assinatura] CRQ 01.20007.1 Pe.</li>
        <li>
          Msc. Ciência e Tecnologia em Saúde-UEPB, Doutor em
          Biotecnologia-UFRPE: [Assinatura]
        </li>
        <li>Técnico Operacional: [Assinatura]</li>
      </ul>
    </div>
  );
};

export default ReportMonthlyApevisa;
