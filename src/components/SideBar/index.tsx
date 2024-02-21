"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { FC, useState } from "react";
import React from "react";
import "./styles.css";
import Logo from "./logo.jpg";
import WarningIcon from "@mui/icons-material/Warning";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HouseIcon from "@mui/icons-material/House";
import AddchartIcon from "@mui/icons-material/Addchart";
import TimelineIcon from "@mui/icons-material/Timeline";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";

import { Thema } from "../../../thema";

import MyModal from "./manutecao";

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
    ],
  },

  {
    name: "Configuração",
    icon: "SettingsIcon",
    items: ["Dados do usuário", "Tema"],
  },
];
type IconProps = {
  iconName: string;
};

const Icon: React.FC<IconProps> = ({ iconName }) => {
  const IconComponent = getIconComponent(iconName);

  if (!IconComponent) {
    // Pode lidar com um ícone desconhecido, ou retornar null, dependendo dos requisitos
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
    case "SettingsIcon":
      return SettingsIcon;
    case "Manuteção":
      return WarningIcon;
    default:
      // Caso o ícone seja desconhecido
      return null;
  }
};

const NavHeader = () => (
  <header className="sidebar-header">
    <Image
      src={Logo}
      alt="Minha Foto"
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
        return "/grafic";
      case "Osmose 2º Passo":
        return "/Home/grafic";
      case "Loop":
        return "/Home/grafic";
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
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div style={{ flexDirection: "row" }}>
      <aside className="sidebar" style={{ background: Thema.Colors.blue1 }}>
        <nav className="sidebar-nav">
          <NavHeader />

          {menuItems.map((item) => (
            <>
              {!item.items && (
                <>
                  <NavButton
                    onClick={handleClick}
                    name={item.name}
                    icon={item.icon}
                    isActive={activeItem === item.name}
                    hasSubNav={!!item.items}
                  />
                </>
              )}
              {item.items && (
                <>
                  <NavButton
                    onClick={handleClick}
                    name={item.name}
                    icon={item.icon}
                    isActive={activeItem === item.name}
                    hasSubNav={!!item.items}
                  />
                  <div
                    className={`sub-nav ${
                      isSubNavOpen(item.name, item.items) ? "open" : ""
                    }`}
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
                </>
              )}
            </>
          ))}
          <MyModal />
        </nav>
      </aside>
    </div>
  );
};
