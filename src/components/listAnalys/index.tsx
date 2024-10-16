import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";
import { formatDate } from "@/utils/functions/FormateDate";

interface UnifiedData {
  samplingDate: string[];
  sampleMatrixAndOrigin: string | null;
  eColiPresence: number[];
  totalColiformsPresence: number[];
  heterotrophicBacteriaCount: number[];
  endotoxins: number[];
  system_id: number;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.breakpoints.down("sm")} .${theme.breakpoints.down("xs")} &`]: {
    fontSize: "0.8rem",
    padding: "8px",
  },
  textAlign: "center",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${theme.breakpoints.down("sm")} .${theme.breakpoints.down("xs")} &`]: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const ListAnalys = (data: UnifiedData) => {
  const samplingDates = Array.isArray(data.samplingDate)
    ? data.samplingDate
    : [data.samplingDate]; // Se for uma string, transforma em array

  return (
    <div className="">
      <h1 className="text-center mt-8 mb-8 text-base font-bold">
        Valores das Análises
      </h1>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className="flex flex-row justify-center">
              <StyledTableCell className="whitespace-nowrap max-sm:w-8/12">
                {"    "} Dia
              </StyledTableCell>
              <StyledTableCell className="whitespace-nowrap">
                Bactérias heterotróficas
              </StyledTableCell>
              <StyledTableCell className="whitespace-nowrap">
                Escherichia coli
              </StyledTableCell>
              <StyledTableCell className="whitespace-nowrap">
                Coliformes Totais
              </StyledTableCell>
              <StyledTableCell className="whitespace-nowrap">
                Endotoxinas
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {samplingDates.map((dayItem, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className="max-sm:w-50"
                >
                  {formatDate(new Date(dayItem))}
                </StyledTableCell>
                <StyledTableCell>{data.eColiPresence[index]}</StyledTableCell>
                <StyledTableCell>
                  {data.totalColiformsPresence[index]}
                </StyledTableCell>
                <StyledTableCell>
                  {data.heterotrophicBacteriaCount[index]}
                </StyledTableCell>
                <StyledTableCell>{data.endotoxins[index]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListAnalys;
