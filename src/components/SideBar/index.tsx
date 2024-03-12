"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC, useState } from "react";
import "./styles.css";
import Logo from "./logo.jpg";
import WarningIcon from "@mui/icons-material/Warning";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HouseIcon from "@mui/icons-material/House";
import AddchartIcon from "@mui/icons-material/Addchart";
import TimelineIcon from "@mui/icons-material/Timeline";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ThermostatAutoOutlinedIcon from "@mui/icons-material/ThermostatAutoOutlined";
import Image from "next/image";
import { Thema } from "../../../thema";
import MyModal from "./manutecao";
import SettingsModal from "./settingsModal";




const menuItems = [
  {
    name: "Home",
    icon: "HouseIcon",
  },
  {
    name: "Parametros",
    icon: "AddchartIcon",
  },

  {
    name: "Graficos",
    icon: "TimelineIcon",
    items: [
      "Água de Alimentação",
      "Pré-Tratamento",
      "Osmose 1º Passo",
      "Osmose 2º Passo",
      "Loop",
      "Consumo de Água",
    ],
  },
  {
    name: "Análises",
    icon: "ThermostatAutoOutlinedIcon ",
    items: ["Apevisa", "ETE", "Reservatórios", "Purificadores"],
  },
  {
    name: "Relatórios",
    icon: "SummarizeOutlinedIcon",
    items: ["Mensal", "Diasafe", "Limpeza Reservatórios", "Resultado Apevisa"],
  },


];
type IconProps = {
  iconName: string;
};

const Icon: React.FC<IconProps> = ({ iconName }) => {
  const IconComponent = getIconComponent(iconName);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "HouseIcon":
      return HouseIcon;
    case "AddchartIcon":
      return AddchartIcon;
    case "TimelineIcon":
      return TimelineIcon;
    case "Manuteção":
      return WarningIcon;
    case "SummarizeOutlinedIcon":
      return SummarizeOutlinedIcon;
    case "ThermostatAutoOutlinedIcon ":
      return ThermostatAutoOutlinedIcon;
    default:
      // Caso o ícone seja desconhecido
      return null;
  }
};

const NavHeader = () => (
  <header className="sidebar-header">
    <Image
      priority={true}
      src={Logo}
      alt="Logo"
      width={100}
      height={100}
      style={{ borderRadius: 25, marginLeft: 55, marginTop: 20 }}
    />
  </header>
);

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => {
  const Href = (name: string) => {
    // Adicione condições para navegar com base no nome
    switch (name) {
      case "Home":
        return "/Home";
      case "Parametros":
        return "/Home/parameters";
      case "Água de Alimentação":
        return "/Home/grafic ";
      case "Pré-Tratamento":
        return "/Home/pretreatment";
      case "Osmose 1º Passo":
        return "/Home/firststep";
      case "Osmose 2º Passo":
        return "/Home/secondstep";
      case "Loop":
        return "/Home/loop";
      case "Mensal":
        return "/Home/report/monthly";
      case "Limpeza Reservatórios":
        return "/Home/report/reservoirCleaning";
      case "Diasafe":
        return "/Home/report/diasafe";
      case "Reservatórios":
        return "/Home/analysis/resevoir";
      case "ETE":
        return "/Home/analysis/ete";
      case "Consumo de Água":
        return "/Home/production";
      case "Apevisa":
        return "/Home/analysis/apevisa";
      case "Resultado Apevisa":
        return "/Home/report/apevisa";
      // case "RT e Operador":
      //   return "/Home/settings/rt";

      default:

        break;
    }
  };

  return (
    <a href={Href(name)} style={{ textDecoration: "none", color: "#d4d4ea" }}>
      <button
        type="button"
        onClick={() => onClick(name)}
        className={isActive ? "active" : ""}
      >
        {icon && <Icon iconName={icon} />}

        <span>{name}</span>
        {hasSubNav && (isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
      </button>
    </a>
  );
};

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
    if (!isMenuOpen) {
      setMenuOpen(true);
    }
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;
    const [isMenuOpen, setMenuOpen] = useState(false);
   
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  

  return (
    <div style={{ flexDirection: "row" }}>
    <aside className={`sidebar ${isMenuOpen ? 'open' : 'closed'}`} style={{ background: Thema.Colors.blue1 }}>
      <nav className="sidebar-nav">
          <NavHeader />

          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {!item.items && (
                <NavButton
                  key={item.name}
                  onClick={handleClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
              )}
              {item.items && (
                <React.Fragment key={item.name}>
                  <NavButton
                    onClick={handleClick}
                    name={item.name}
                    icon={item.icon}
                    isActive={activeItem === item.name}
                    hasSubNav={!!item.items}
                  />
                  <div
                    className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""
                      }`}
                    key={`${item.name}-sub-nav`}
                  >
                    {item.items.map((subItem) => (
                      <NavButton
                        key={subItem}
                        onClick={handleClick}
                        name={subItem}
                        isActive={activeItem === subItem}
                      />
                    ))}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
          <div>
            <MyModal />
            <SettingsModal />
          </div>

        </nav>
      </aside>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        HANBUERGE
      </button>
    </div>
  );
};
