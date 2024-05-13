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
        <ListItemText
          primary={`Produção Anual Permeado: ${AnnualAverageProdutic}`}
        />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText
          primary={`Produção Anual Rejeito:  ${AnnualAverageReject}`}
        />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText primary={`Porcentagem Anual Permeado:   ${produtic}`} />
      </ListItem>
      <Divider component="p" />
      <ListItem>
        <ListItemText primary={`Porcentagem Anual Rejeito:   ${reject}`} />
      </ListItem>
    </div>
  );
}
