import React from "react";
import style from "@/components/loader/style.module.css";

export default function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.waves}></div>
    </div>
  );
}
