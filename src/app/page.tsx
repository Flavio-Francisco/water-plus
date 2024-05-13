import React from "react";
import Auth from "@/components/Auth";
import Provider from "@/components/Providers";
import { UserProvider } from "@/context/userContext";
import { DataFullProvider } from "@/context/userDataFull";

export default function LogimPage() {
  return (
    <Provider>
      <DataFullProvider>
        <UserProvider>
          <Auth />
        </UserProvider>
      </DataFullProvider>
    </Provider>
  );
}
