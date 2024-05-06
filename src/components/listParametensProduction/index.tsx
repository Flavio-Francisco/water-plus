import { Props, extractData } from "@/utils/models/Data";
import React from "react";
import { Table } from "react-bootstrap";

export default function ListParametsProduction(data: Props) {
  if (!data || !data.data) {
    return <div>Dados não fornecidos</div>;
  }

  const Data = extractData(data);

  return (
    <div>
      <h1 className="text-center mt-8 mb-8 text-2xl font-bold">
        Dados Diários:
      </h1>
      <Table striped bordered hover className="m-auto w-4/5">
        <thead>
          <tr>
            <th style={{ width: "40%", textAlign: "center" }}>Dia</th>
            <th style={{ width: "40%", textAlign: "center" }}>Parâmetro</th>
          </tr>
        </thead>
        <tbody>
          {Data.Day?.map((dayItem, index) => (
            <tr key={index}>
              <td style={{ width: "40%", textAlign: "center" }}>
                <p>{dayItem.date}</p>
              </td>
              <td style={{ width: "40%", textAlign: "center" }}>
                {(data?.data || [])[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
