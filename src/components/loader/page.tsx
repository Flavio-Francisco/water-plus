import React from "react";
import style from "@/components/loader/style.module.css";
interface Props {
  marginLeft?: string | number | undefined;
}
export default function Loader({ marginLeft }: Props) {
  return (
    <div className={style.loader} style={{ marginLeft }}>
      <div className={style.waves}></div>
    </div>
  );
}
