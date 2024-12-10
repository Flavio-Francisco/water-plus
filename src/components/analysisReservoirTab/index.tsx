import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, CircularProgress } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetAnalysResevatory, GetPointName } from "@/app/fecth/analys";
import { useUserContext } from "@/context/userContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { WaterAnalysis } from "@/utils/models/AnalysisResevatori";
import { getTranslatedFields } from "@/utils/functions/formateNameResevatory";
import { formatDate } from "@/utils/functions/ordeData";

// const mockData: WaterAnalysis[] = [
//   {
//     id: 1,
//     bicarbonateAlkalinity: "30",
//     carbonateAlkalinity: "0",
//     hydroxideAlkalinity: "0",
//     totalAlkalinity: "30",
//     aluminum: "0.1",
//     ammonia: "0.2",
//     calcium: "8",
//     chlorides: "30",
//     freeResidualChlorine: "0",
//     electricalConductivity: "107",
//     apparentColor: "0",
//     carbonateHardness: "20",
//     nonCarbonateHardness: "20",
//     totalHardness: "40",
//     totalIron: "0.12",
//     magnesium: "0",
//     manganese: "0",
//     nitrate: "2.34",
//     nitrite: "0",
//     dissolvedOxygen: "8.28",
//     pH: "7.5",
//     potassium: "4.01",
//     sodium: "4.01",
//     totalDissolvedSolids: "53.50",
//     sulfate: "0",
//     hydrogenSulfide: "0",
//     surfactants: "0.5",
//     totalColiforms: "8",
//     heterotrophicBacteriaCount: "1215",
//     endotoxins: "0",
//     samplingDate: "2024-12-01",
//     sampleMatrixAndOrigin: "Reservatório 1",
//     system_id: 1,
//   },
//   {
//     id: 2,
//     bicarbonateAlkalinity: "28",
//     carbonateAlkalinity: "0",
//     hydroxideAlkalinity: "0",
//     totalAlkalinity: "28",
//     aluminum: "0.2",
//     ammonia: "0.1",
//     calcium: "9",
//     chlorides: "32",
//     freeResidualChlorine: "0.1",
//     electricalConductivity: "110",
//     apparentColor: "1",
//     carbonateHardness: "21",
//     nonCarbonateHardness: "19",
//     totalHardness: "40",
//     totalIron: "0.10",
//     magnesium: "1",
//     manganese: "0",
//     nitrate: "2.50",
//     nitrite: "0",
//     dissolvedOxygen: "8.00",
//     pH: "7.4",
//     potassium: "4.00",
//     sodium: "4.02",
//     totalDissolvedSolids: "54.00",
//     sulfate: "0",
//     hydrogenSulfide: "0",
//     surfactants: "0.4",
//     totalColiforms: "10",
//     heterotrophicBacteriaCount: "1200",
//     endotoxins: "0",
//     samplingDate: "2024-12-02",
//     sampleMatrixAndOrigin: "Reservatório 1",
//     system_id: 1,
//   },
//   {
//     id: 3,
//     bicarbonateAlkalinity: "31",
//     carbonateAlkalinity: "0",
//     hydroxideAlkalinity: "0",
//     totalAlkalinity: "31",
//     aluminum: "0.15",
//     ammonia: "0.25",
//     calcium: "10",
//     chlorides: "33",
//     freeResidualChlorine: "0",
//     electricalConductivity: "112",
//     apparentColor: "2",
//     carbonateHardness: "22",
//     nonCarbonateHardness: "18",
//     totalHardness: "40",
//     totalIron: "0.11",
//     magnesium: "0",
//     manganese: "0",
//     nitrate: "2.60",
//     nitrite: "0",
//     dissolvedOxygen: "7.90",
//     pH: "7.6",
//     potassium: "4.03",
//     sodium: "4.04",
//     totalDissolvedSolids: "55.00",
//     sulfate: "0",
//     hydrogenSulfide: "0",
//     surfactants: "0.3",
//     totalColiforms: "9",
//     heterotrophicBacteriaCount: "1210",
//     endotoxins: "0",
//     samplingDate: "2024-12-03",
//     sampleMatrixAndOrigin: "Reservatório 1",
//     system_id: 1,
//   },
// ];

export default function AnalysList() {
  const { user } = useUserContext();
  const [selectedAnalys, setSelectedAnalys] = React.useState<
    WaterAnalysis[] | null
  >(null);
  const [selectedNames, setSelectedNames] = React.useState<Record<
    keyof WaterAnalysis,
    string
  > | null>();
  //getTranslatedFields
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateAnalys"],
    mutationFn: (point: string) =>
      GetAnalysResevatory(user?.system_id || 0, point),
    onSuccess(response) {
      setSelectedAnalys(response);
      setSelectedNames(getTranslatedFields(response[0]));
      console.log(getTranslatedFields(response));
      console.log(response);
    },
  });

  const { data: analys, isLoading } = useQuery<string[]>({
    queryKey: ["pointName"],
    queryFn: () => GetPointName(user?.system_id || 0),
  });

  return (
    <div className="flex flex-col justify-center items-center mt-4 w-11/12 max-sm:w-[390px] max-sm:left-10 absolute">
      <div className="container w-11/12">
        <Autocomplete
          className="m-auto mt-5 max-md:w-4/5 w-2/5"
          onChange={(event, value) => {
            if (value) {
              mutate(value);
            } else {
              console.log("Nenhum ponto de coleta selecionado");
            }
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={analys || []}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Selecione o Ponto da Coleta"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? <CircularProgress size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        <div className="container w-full">
          {selectedAnalys && (
            <div>
              {isPending ? (
                <div className="flex justify-center items-center h-96">
                  <CircularProgress size="8rem" />
                </div>
              ) : (
                <TableContainer component={Paper} className="mt-5">
                  <Table sx={{ minWidth: 650 }} aria-label="Tabela de Análise">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          className="text-center "
                          style={{ fontSize: 16, fontWeight: "bold" }}
                        >
                          Parâmetro
                        </TableCell>
                        {selectedAnalys.map((item, index) => (
                          <TableCell
                            align="right"
                            key={`header-${index}`}
                            className="text-center "
                            style={{ fontSize: 16, fontWeight: "bold" }}
                          >
                            {formatDate(item.samplingDate) ||
                              `Data ${index + 1}`}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(selectedNames || {})
                        .filter(
                          ([fieldKey]) =>
                            fieldKey !== "id" &&
                            fieldKey !== "system_id" &&
                            fieldKey !== "Data da Coleta" &&
                            fieldKey !== "Origem da Amostra"
                        )
                        .map(([fieldKey, fieldName]) => (
                          <TableRow key={fieldKey} hover>
                            <TableCell component="th" scope="row">
                              {fieldName}
                            </TableCell>
                            {selectedAnalys.map((item, index) => (
                              <TableCell
                                align="right"
                                key={`${fieldKey}-${index}`}
                                className="border-l "
                              >
                                {(
                                  item as unknown as Record<
                                    string,
                                    string | number
                                  >
                                )[fieldKey] || "-"}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
