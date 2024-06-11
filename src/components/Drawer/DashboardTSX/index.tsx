"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModalTsx from "./ModalTsx";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "@/components/pdf";
import ReservoirClearning from "@/components/reportReservoirClearning";
import ReportDiasafe from "@/components/reportDiasafe";
import ReportApevisa from "@/components/reportApvisa";
import { ArrayApavise } from "@/utils/models/Data";
import { useDoctor } from "@/context/useDoctor";
import { useChemist } from "@/context/useChermist";
import { useOperator } from "@/context/useOperator";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMachines } from "@/app/fecth/diasafe";
import { useUserContext } from "@/context/userContext";
import { createReservoir } from "@/app/fecth/resevatorir";
import { formatDateResevatorir } from "@/utils/functions/FormateDate";
import { DesinfectionModel } from "@/utils/models/desifection";
import Electrogram from "@/components/Electrogram";
import { ParametersDB } from "@/utils/models/WaterParametersModel";
import { getSystemId } from "@/app/fecth/systems";
import { Systems } from "@/utils/models/analysis";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IProps {
  icon: React.ReactNode;
}

export default function DashboardTSX({ icon }: IProps) {
  const { user } = useUserContext();
  const { operator } = useOperator();
  const { doctor } = useDoctor();
  const { Chemist } = useChemist();
  const queryClient = useQueryClient();
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedMonth, setSelectedMonth] = React.useState<string>("");
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);
  const [openModal5, setOpenModal5] = React.useState(false);

  const { data } = useQuery({
    queryKey: ["diasafe"],
    queryFn: () => getMachines(user?.system_id || 0),
  });
  const { data: system } = useQuery({
    queryKey: ["systemId"],
    queryFn: () => getSystemId(user?.system_id || 0),
  });
  const systems = (system as Systems) || [];

  const { mutate, data: i } = useMutation({
    mutationKey: ["resevatorirForm"],
    mutationFn: (date: string) => createReservoir(user?.system_id || 0, date),
  });
  const date: DesinfectionModel | undefined = queryClient.getQueryData([
    "desinfection",
  ]);

  const electrogram: ParametersDB[] =
    queryClient.getQueryData(["Electrogram"]) || [];
  const uniqueMonths = Array.from(
    new Set(
      electrogram.map((item) => {
        if (!item.date) return "";
        const itemDate = new Date(item.date);
        const month = itemDate.getMonth() + 2; // getMonth() retorna 0-11
        const year = itemDate.getFullYear();
        return `${year}-${month.toString().padStart(2, "0")}`;
      })
    )
  ).filter((item) => item !== "");

  // Ordenar os meses
  uniqueMonths.sort();
  const filteredData = electrogram.filter((item) => {
    if (!item.date) return false;
    const itemDate = new Date(item.date);
    const month = itemDate.getMonth() + 2; // getMonth() retorna 0-11
    const year = itemDate.getFullYear();
    const [selectedYear, selectedMonthNumber] = selectedMonth
      .split("-")
      .map(Number);
    return year === selectedYear && month === selectedMonthNumber;
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedMonth(event.target.value as string);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };
  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };
  const handleOpenModal3 = () => {
    setOpenModal3(true);
  };
  const handleOpenModal4 = () => {
    setOpenModal4(true);
  };
  const handleOpenModal5 = () => {
    setOpenModal5(true);
  };
  const handlecloseModal1 = () => {
    setOpenModal1(false);
  };
  const handlecloseModal2 = () => {
    setOpenModal2(false);
  };
  const handlecloseModal3 = () => {
    setOpenModal3(false);
  };
  const handlecloseModal4 = () => {
    setOpenModal4(false);
  };
  const handlecloseModal5 = () => {
    setOpenModal5(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    const date = formatDateResevatorir(new Date(value?.toString() || ""));
    console.log(date);
    mutate(date);
    //console.log(formatDate(new Date());
    console.log(i);
  }, [value]);

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open === true ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open === true ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal1();
          }}
        >
          Mensal
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal2();
          }}
        >
          Limpeza Reservatórios
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal3();
          }}
        >
          Diasafe
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal4();
          }}
        >
          Apevisa
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal5();
          }}
        >
          Eletrograma
        </MenuItem>
      </Menu>

      <div>
        <ModalTsx
          fullWidth={true}
          open={openModal1}
          onClose={handlecloseModal1}
          maxWidth="xl"
        >
          <div className="w-full h-screen">
            <PDFViewer className="w-full h-full">
              <Pdf
                Chemist={Chemist}
                doctor={doctor}
                operator={operator}
                data={date}
              />
            </PDFViewer>
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={value === null ? false : true}
          open={openModal2}
          onClose={handlecloseModal2}
          maxWidth="xl"
        >
          {value === null ? (
            <div className="flex flex-col justify-center items-center">
              <div className="mb-3">
                <p className="text-lg">
                  Selecione a Data da Última Desinfecção
                </p>
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          ) : null}
          {value && (
            <div className="w-full h-screen">
              <PDFViewer className="w-full h-full">
                <ReservoirClearning
                  Chemist={Chemist}
                  lastCleaning={value?.toString()}
                />
              </PDFViewer>
            </div>
          )}
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal3}
          onClose={handlecloseModal3}
          maxWidth="xl"
        >
          <div className="w-full h-screen">
            <PDFViewer className="w-full h-full">
              <ReportDiasafe data={data || []} />
            </PDFViewer>
          </div>
        </ModalTsx>
        <ModalTsx
          fullWidth={true}
          open={openModal4}
          onClose={handlecloseModal4}
          maxWidth="xl"
        >
          <ReportApevisa reports={ArrayApavise} />
        </ModalTsx>
        <ModalTsx
          fullWidth={selectedMonth ? true : false}
          open={openModal5}
          onClose={handlecloseModal5}
          maxWidth="xl"
        >
          <div className="p-4" style={{ display: selectedMonth && "none" }}>
            <Select
              value={selectedMonth}
              onChange={handleChange}
              displayEmpty
              className="w-full mb-4"
            >
              <MenuItem value="">
                <p>Selecione o Mês</p>
              </MenuItem>
              {uniqueMonths.map((month) => (
                <MenuItem key={month} value={month}>
                  {new Date(`${month}-01`).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </MenuItem>
              ))}
            </Select>
          </div>

          {selectedMonth && (
            <div className="w-full h-screen">
              <PDFViewer className="w-full h-full">
                <Electrogram data={filteredData} system={systems.name || ""} />
              </PDFViewer>
            </div>
          )}
        </ModalTsx>
      </div>
    </div>
  );
}
