"use client";

import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogOut() {
  const { push } = useRouter();

  return (
    <button className="" onClick={() => push("/")}>
      <ExitToAppSharpIcon />
    </button>
  );
}
