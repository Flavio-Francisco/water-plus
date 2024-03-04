import { extractData } from "@/utils/models/Data";
import React from "react";

type Prop = {
  data?: object | unknown[] | undefined;
};

export default function ListParametsProduction({ data }: Prop) {
  if (!data) {
    return <div>Dados não fornecidos</div>;
  }

  const Data = extractData({ data });

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
        Dados Diários:
      </h1>
      <ul>
        {Data.map((item, index) => (
          <li
            key={index}
            style={{
              width: "90%",
              border: "1px solid grey",
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <p
              style={{
                fontSize: 18,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              data: {item.date}
            </p>
            <p
              style={{
                fontSize: 18,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              Permeado: {item.permeated}
            </p>
            <p
              style={{
                fontSize: 18,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              Rejeito: {item.reject}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
