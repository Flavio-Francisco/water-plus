"use client";

import { useUserContext } from "@/context/userContext";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import React from "react";

export default function LogOut() {
  const { signOut } = useUserContext();

  return (
    <button className="" onClick={() => signOut()}>
      <ExitToAppSharpIcon />
    </button>
  );
}
