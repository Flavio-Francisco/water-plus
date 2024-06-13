"use client";
import Home from "@/components/home";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

export default function HomePage() {
  const session = getServerSession();

  if (!session) {
    redirect("/");
  }
  return (
    <>
      <Home />
    </>
  );
}
