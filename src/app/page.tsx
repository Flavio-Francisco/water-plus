import React from "react";
import Auth from "@/components/Auth";
import Provider from "@/components/Providers";
import { UserProvider } from "@/context/userContext";

export default function LogimPage() {
  return (
    <Provider>
      <UserProvider>
        <Auth />
      </UserProvider>
    </Provider>
  );
}
