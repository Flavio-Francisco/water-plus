"use client";
import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useRouter } from "next/navigation";

interface Iporps {
  route1?: string;
  route2?: string;
  route3?: string;
  route4?: string;
  route5?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  icon: React.ReactNode;
}

export default function Dashboard({
  route1,
  route2,
  route3,
  route4,
  route5,
  name1,
  name2,
  name3,
  name4,
  name5,
  icon,
}: Iporps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { push } = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
            push(route1 || "");
          }}
        >
          {name1}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            push(route2 || "");
          }}
        >
          {name2}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            push(route3 || "");
          }}
        >
          {name3}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            push(route4 || "");
          }}
        >
          {name4}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            push(route5 || "");
          }}
        >
          {name5}
        </MenuItem>
      </Menu>
    </div>
  );
}
