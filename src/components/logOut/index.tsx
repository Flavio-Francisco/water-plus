"use client";
import { signOut } from "next-auth/react";
import { useUserContext } from "@/context/userContext";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import React from "react";

export default function LogOut() {
  const { signOutUser } = useUserContext();
  const handleSigOut = () => {
    signOut({ callbackUrl: "/" });
    signOutUser();
  };

  return (
    <button className="" onClick={handleSigOut}>
      <ExitToAppSharpIcon />
    </button>
  );
}
