import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

interface Iprops {
  month: number | undefined;
  produtic: string | undefined;
  reject: string | undefined;
  AnnualAverageProdutic: number | undefined;
  AnnualAverageReject: number | undefined;
}

export default function CardProduction({
  reject,
  produtic,
  month,
  AnnualAverageProdutic,
  AnnualAverageReject,
}: Iprops) {
  return (
    <div>
      <ListItem>
        <ListItemText primary={`Mês Referência: ${month}`} />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText primary={`Produção Atual Permeado: ${produtic}`} />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText primary={`Produção Atual Rejeito:  ${reject}`} />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText
          primary={`Porcentagem Anual Permeado:   ${AnnualAverageProdutic} L/min`}
        />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText
          primary={`Porcentagem Anual Rejeito:   ${AnnualAverageReject} L/min`}
        />
      </ListItem>
    </div>
  );
}
