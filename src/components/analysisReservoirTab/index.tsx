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
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Paper from "@mui/material/Paper";
import { WaterAnalysis } from "@/utils/models/AnalysisResevatori";
import {
  colorClassification,
  getTranslatedFields,
} from "@/utils/functions/formateNameResevatory";
import { formatDate } from "@/utils/functions/ordeData";
import ModalTsx from "../Drawer/DashboardTSX/ModalTsx";
import PdfTable from "../pdfTable";
import { PDFViewer } from "@react-pdf/renderer";
import DashboardReservoir from "./DashboardReservoir";
import FileListReservoir from "../selectPdf/reservoir";

export default function AnalysList() {
  const { user } = useUserContext();
  const [open, setOpen] = React.useState(false);
  const [poitName, setPointName] = React.useState("");
  const [selectedAnalys, setSelectedAnalys] = React.useState<
    WaterAnalysis[] | null
  >(null);

  const [sucess, setSucess] = React.useState<boolean>(false);

  const onSucess = (sucess: boolean) => {
    if (sucess === true) {
      setSucess(sucess);
    }
  };

  const [selectedNames, setSelectedNames] = React.useState<Record<
    keyof WaterAnalysis,
    string
  > | null | void>();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["updateAnalys"],
    mutationFn: (point: string) =>
      GetAnalysResevatory(user?.system_id || 0, point),
    onSuccess(response) {
      setSelectedAnalys(response);
      setSelectedNames(getTranslatedFields(response[0] || []));
    },
  });

  const {
    data: analys,
    isLoading,
    refetch,
  } = useQuery<string[]>({
    queryKey: ["pointName"],
    queryFn: () => GetPointName(user?.system_id || 0),
  });

  React.useEffect(() => {
    if (sucess === true) {
      mutate(poitName);
      setSucess(false);
    }
  }, [sucess]);
  return (
    <div className="flex  justify-center items-center mt-4 w-11/12 max-sm:w-full max-sm:left-9 absolute">
      <div className="container w-11/12">
        <Autocomplete
          className="m-auto mt-5 max-md:w-4/5 w-2/5"
          onChange={(event, value) => {
            if (value) {
              mutate(value);
              setPointName(value);
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
                <>
                  <div className="w-full flex justify-end mt-3">
                    <div className="flex justify-center">
                      <FileListReservoir />
                    </div>
                    {selectedAnalys.length >= 1 ? (
                      <button
                        onClick={handleOpen}
                        className="p-2 hover:bg-slate-200 rounded"
                        style={{
                          display: open === true ? "none" : "",
                        }}
                      >
                        <PictureAsPdfOutlinedIcon
                          color="action"
                          style={{ fontSize: 28 }}
                        />
                      </button>
                    ) : null}
                    <ModalTsx
                      maxWidth={"lg"}
                      fullWidth={true}
                      onClose={handleClose}
                      open={open}
                    >
                      <div className="w-full h-screen">
                        {selectedAnalys.length >= 1 ? (
                          <PDFViewer className="w-full h-full">
                            <PdfTable
                              selectedAnalys={selectedAnalys || []}
                              poitName={poitName}
                            />
                          </PDFViewer>
                        ) : null}
                      </div>
                    </ModalTsx>
                  </div>
                  {selectedAnalys.length >= 1 ? (
                    <TableContainer component={Paper} className="mt-3 ">
                      <Table
                        sx={{ flex: 1, justifyContent: "center" }}
                        aria-label="Tabela de Análise"
                      >
                        <TableHead className="max-sm:p-0">
                          <TableRow className="max-sm:h-28  ">
                            <TableCell
                              className="text-center max-sm:text-left  max-sm:h-full "
                              style={{ fontSize: 16, fontWeight: "bold" }}
                            >
                              Parâmetro
                            </TableCell>
                            {selectedAnalys.map((item, index) => (
                              <TableCell
                                align="right"
                                key={`header-${index}`}
                                className="text-center sm:relative max-sm:-rotate-90 "
                                style={{
                                  fontSize: 16,
                                  fontWeight: "bold",
                                }}
                              >
                                <DashboardReservoir
                                  refetch={refetch}
                                  className=" hover:bg-slate-200 absolute top-0 right-0 rounded-sm "
                                  icon={<EditOutlinedIcon fontSize="small" />}
                                  values={{
                                    ...item,
                                    sampleName: item.sampleMatrixAndOrigin,
                                  }}
                                  onSucess={onSucess}
                                />

                                <p className="bg-white">
                                  {formatDate(item.samplingDate) ||
                                    `Data ${index + 1}`}
                                </p>
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
                                fieldKey !== "samplingDate" &&
                                fieldKey !== "sampleMatrixAndOrigin"
                            )
                            .map(([fieldKey, fieldName]) => (
                              <TableRow key={fieldKey}>
                                <TableCell component="th" scope="row">
                                  {fieldName}
                                </TableCell>
                                {selectedAnalys.map((item, index) => (
                                  <TableCell
                                    sx={{
                                      flex: 1,
                                    }}
                                    align="right"
                                    key={`${fieldKey}-${index}`}
                                    className="border-l flex"
                                    style={{
                                      color:
                                        colorClassification(fieldName, item) ===
                                        "Verde"
                                          ? "green"
                                          : colorClassification(
                                              fieldName,
                                              item
                                            ) === "Amarelo"
                                          ? "#89a100"
                                          : "red",
                                      backgroundColor:
                                        colorClassification(fieldName, item) ===
                                        "Verde"
                                          ? "#e5f9e7"
                                          : colorClassification(
                                              fieldName,
                                              item
                                            ) === "Amarelo"
                                          ? "#f0f894"
                                          : "#f9e5ea",
                                    }}
                                    onMouseMove={(e) => {
                                      const target = e.target as HTMLElement;

                                      target.style.backgroundColor =
                                        colorClassification(fieldName, item) ===
                                        "Verde"
                                          ? "#a3f1ab"
                                          : colorClassification(
                                              fieldName,
                                              item
                                            ) === "Amarelo"
                                          ? "#e0ec5e"
                                          : "#f8c0ce";
                                    }}
                                    onMouseLeave={(e) => {
                                      const target = e.target as HTMLElement;

                                      target.style.backgroundColor =
                                        colorClassification(fieldName, item) ===
                                        "Verde"
                                          ? "#e5f9e7"
                                          : colorClassification(
                                              fieldName,
                                              item
                                            ) === "Amarelo"
                                          ? "#f0f894"
                                          : "#f9e5ea";
                                    }}
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
                  ) : (
                    <div className="flex justify-center items-center h-32 ">
                      <h1 className="font-bold text-center text-3xl">
                        Não há dados de ponto
                      </h1>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
