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
      <h1 className="text-center mt-8 mb-6 text-lg font-bold">
        Valores das Análises
      </h1>
      <Paper sx={{ width: "105%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 360 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="flex flex-row justify-center ">
                <StyledTableCell className="border-l border-r max-sm:w-8/12 sm:w-1/12">
                  Data
                </StyledTableCell>
                <StyledTableCell className="whitespace-nowrap border-r sm:w-1/5">
                  Heterotróficas
                </StyledTableCell>
                <StyledTableCell className="whitespace-nowrap border-r  sm:w-1/5">
                  Escherichia c.
                </StyledTableCell>
                <StyledTableCell className="whitespace-nowrap border-r sm:w-1/5">
                  Coliformes T.
                </StyledTableCell>
                <StyledTableCell className="whitespace-nowrap border-r sm:w-1/5">
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
                    className="max-sm:w-36 border-r "
                  >
                    {formatDate(new Date(dayItem))}
                  </StyledTableCell>
                  <StyledTableCell className="border-r">
                    {data.heterotrophicBacteriaCount[index]}
                  </StyledTableCell>
                  <StyledTableCell className="border-r">
                    {data.totalColiformsPresence[index]}
                  </StyledTableCell>
                  <StyledTableCell className="border-r">
                    {data.eColiPresence[index]}
                  </StyledTableCell>
                  <StyledTableCell>{data.endotoxins[index]}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ListAnalys;
