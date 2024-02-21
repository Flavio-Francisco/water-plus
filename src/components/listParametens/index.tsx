import { formatarDados } from "@/utils/models/Data";
import React from "react";

type Prop = {
  data?: object | unknown[] | undefined;
};

export default function ListParamets({ data }: Prop) {
  if (!data) {
    return <div>Dados não fornecidos</div>;
  }

  const dadosFormatados = formatarDados({ data });

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
        Dados Diários:
      </h1>
      <ul>
        {dadosFormatados.map((item, index) => (
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
              data: {item.valorFormatado}
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
              {" "}
              parametro: {item.segundoValor}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
