"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import Filter1OutlinedIcon from "@mui/icons-material/Filter1Outlined";
import Filter2OutlinedIcon from "@mui/icons-material/Filter2Outlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import { useRouter } from "next/navigation";
import Dashboard from "./Dashboard";
import WaterParametersForm from "../waterParametersForm";
import Maintenance from "../SideBar/manutecao";
import SettingsModal from "../SideBar/settingsModal";
import LogOut from "../logOut";
import UserCard from "../CardUser";
import Image from "next/image";
import Logo from "../SideBar/logo.jpg";
import ImageUser from "../../../public/user-not.png";
import { useUserContext } from "@/context/userContext";
import { CircularProgress } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ActionDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Drawer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = useUserContext();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { push } = useRouter();
  if (user === null) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="m-auto flex flex-col justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold text-center mb-6 text-[rgba(25,118,210,255)]">
              Desculpe!!!
            </h1>
            <h2 className="text-4xl font-bold first-letter:text-center text-[rgba(25,118,210,255)]">
              Não Há Usuário Logado no Sistema
            </h2>
          </div>
          <div className="rounded-full">
            <Image
              className="rounded-full"
              priority
              width={200}
              height={200}
              src={ImageUser}
              alt={"imagem"}
            />
          </div>
          <div className="m-auto">
            <CircularProgress size={100} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Box sx={{ display: user === null ? "none" : "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Image
              style={{ borderRadius: 15 }}
              priority
              className="image"
              src={Logo}
              alt="Logo"
              width={30}
              height={30}
            />
          </Typography>
          <div className="flex flex-row gap-8 m-auto w-4/12">
            <ListItemIcon
              title="Parametros"
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <WaterParametersForm />
            </ListItemIcon>
            <ListItemIcon
              title="Manuteção"
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Maintenance />
            </ListItemIcon>
            <ListItemIcon
              title="Configuração"
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              <SettingsModal />
            </ListItemIcon>
          </div>
          <div className="gap-5 flex flex-row justify-center items-center">
            <div className="max-md:hidden mt-2">
              <UserCard />
            </div>

            <LogOut />
          </div>
        </Toolbar>
      </AppBar>
      <ActionDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/*Lista de icones*/}
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home")}
            >
              <ListItemIcon
                title="Tela Inicial"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <OtherHousesOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Tela Inicial"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home/grafic ")}
            >
              <ListItemIcon
                title="Água de Alimentação"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <WaterDropOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Água de Alimentação"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home/pretreatment")}
            >
              <ListItemIcon
                title="Pré-Tratamento"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GrainOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Pré-Tratamento"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home/production")}
            >
              <ListItemIcon
                title="Consumo de Água"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <WaterOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Consumo de Água"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home/firststep")}
            >
              <ListItemIcon
                title="Osmose 1º Passo"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Filter1OutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Osmose 1º Passo"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home/secondstep")}
            >
              <ListItemIcon
                title="Osmose 2º Passo"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Filter2OutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Osmose 2º Passo"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => push("/Home/loop")}
            >
              <ListItemIcon
                title="Looping"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LoopOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Looping"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                title="Relatórios"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Dashboard
                  name1="Mensal"
                  name2="Limpeza Reservatórios"
                  name3="Diasefe"
                  name4="Resultado Apevisa"
                  route1="/Home/report/monthly"
                  route2="/Home/report/reservoirCleaning"
                  route3="/Home/report/diasafe"
                  route4="/Home/report/apevisa"
                  icon={<AssignmentOutlinedIcon />}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Relatórios"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                title="Análises"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Dashboard
                  name1="Reservatórios"
                  name2="ETA"
                  name3="Apevisa"
                  route1="/Home/analysis/resevoir"
                  route2="/Home/analysis/ete"
                  route3="/Home/analysis/apevisa"
                  icon={<HubOutlinedIcon />}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Análises"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </ActionDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
