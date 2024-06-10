import React from "react";
import { Thema } from "../../../thema";

interface Iprops {
  className?: string | undefined;
}
export default function Line({ className }: Iprops) {
  return (
    <div
      className={className}
      style={{ width: "100%", height: 1, backgroundColor: Thema.Colors.gray }}
    ></div>
  );
}
